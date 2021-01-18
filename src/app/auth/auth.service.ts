import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

import { environment } from '../../environments/environment';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: string;
  refreshToken: string;
  expiresIn: string;
}

export interface UserResponseData 
{"uid": string,
"email": string,
"emailVerified": boolean,
"displayName": string,
"disabled": boolean,
"metadata": object,
"tokensValidAfterTime": string,
"providerData": []
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer: any;
  
  get userIsAuthenticated() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get userId() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }

  get user() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user;
        } else {
          return null;
        }
      })
    );
  }

  constructor(private http: HttpClient) {}

  autoLogin() {
    return from(Plugins.Storage.get({ key: 'authData' })).pipe(
      map(storedData => {
        if (!storedData || !storedData.value) {
          return null;
        }
        const parsedData = JSON.parse(storedData.value) as {
          token: string;
          tokenExpirationDate: string;
          userId: string;
          displayName:string;
          email: string;
          idToken: string;
        };
        const expirationTime = new Date(parsedData.tokenExpirationDate);
        if (expirationTime <= new Date()) {
          return null;
        }
        const user = new User(
          parsedData.userId,
          parsedData.displayName,
          parsedData.email,
          parsedData.token,
          expirationTime,
          parsedData.idToken
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
        }
      }),
      map(user => {
        return !!user;
      })
    );
  }

  signup(email: string, password: string, displayName: string) {
    return this.http.post<AuthResponseData>(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
        environment.firebaseAPIKey
      }`,
      {email, password, displayName, returnSecureToken: true }
    ).pipe(tap(this.setUserData.bind(this)));
  }

  updateUser(id: string, displayName: string, email, password, photoUrl: string) {
    if(password && password != ""){
      return this.http.post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
          environment.firebaseAPIKey
        }`,
        {idToken: id, displayName: displayName, photoUrl: photoUrl, email: email, password: password, returnSecureToken: true }
      ).pipe(tap(this.logout.bind(this)));
    }
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
        environment.firebaseAPIKey
      }`,
      {idToken: id, displayName: displayName, photoUrl: photoUrl, email: email, returnSecureToken: true }
    ).pipe(tap(this.logout.bind(this)));
  }

  deleteUser(id: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${
        environment.firebaseAPIKey
      }`,
      {idToken: id}
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        environment.firebaseAPIKey
      }`,
      { email, password, returnSecureToken: true }
    ).pipe(tap(this.setUserData.bind(this)));
  }

  setUserData(resData: AuthResponseData) {
    console.log(resData);
    const expirationDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
    this._user.next(new User(resData.localId, resData.displayName, resData.email, resData.refreshToken, expirationDate, resData.idToken));
    this.StoreAuthData(resData.localId, resData.displayName, resData.refreshToken, expirationDate.toISOString(), resData.email, resData.idToken);
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({ key: 'authData' });
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  private StoreAuthData(
    userId: string,
    displayName: String,
    token: string,
    tokenExpirationDate: string,
    email: string,
    idToken: string) {
      const data = JSON.stringify({userId, displayName, token, tokenExpirationDate, email, idToken});
      Plugins.Storage.set({key: 'authData', value: data});
    }
}
