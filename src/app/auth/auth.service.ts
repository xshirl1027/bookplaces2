import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';
import { environment } from '../../environments/environment';
import { User } from './user.model';
import * as firebase from 'firebase';

firebase.default.initializeApp({
  apiKey: "AIzaSyDMqXL534Jdd0JTcpdJRQNr1gFpjpR_pes",
  authDomain: "teak-mantis-271722.firebaseapp.com",
  projectId: "teak-mantis-271722",
  databaseURL: "https://teak-mantis-271722.firebaseio.com"
});

// Initialize Cloud Functions through Firebase
var functions = firebase.default.functions();

export interface AuthResponseData {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: string;
  refreshToken: string;
  expiresIn: string;
  isAdmin: boolean;
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
  private _adminUsers = new BehaviorSubject<{}>(null);
  private _userIsAdmin = new BehaviorSubject<boolean>(false);
  private activeLogoutTimer: any;
  
  constructor(private http: HttpClient) {}

  get users(){
    return functions.httpsCallable('getAllUsers');
  }

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

  get adminUsers() {
    return this._adminUsers.asObservable().pipe(
      map(adminUsers => {
        if (adminUsers) {
          return adminUsers;
        } else {
          return null;
        }
      })
    );
  }

  autoLogin(path: string) {
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
          isAdmin: boolean;
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
          parsedData.idToken,
          parsedData.isAdmin
        );
        return user;
      }),
      tap(user => {
        if (user) {
          this._user.next(user);
        }
      }),
      map(user => {
        if(user != null && !user.isAdmin && path === 'admin'){
          return false;
        }
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
    );
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
    let res: AuthResponseData;
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        environment.firebaseAPIKey
      }`,
      { email, password, returnSecureToken: true }
    ).pipe(switchMap(resData=>{
      res = resData;
      return this.fetchAdminUsers();
    }), tap((adminUsers)=>{
      res['isAdmin'] = res.localId in adminUsers
      this.setUserData(res);
    }));
  }
  makeUserAdmin(userId){
    let name: string;
    return this.http.post(
      `${environment.firebaseUrl}/adminUsers.json`,
      {
        id: userId
      }
    ).pipe(switchMap((res)=>{
      name = res['name'];
      return this.adminUsers;
    }), take(1), tap((adminUsers)=>{
      adminUsers[userId]=name;
      this._adminUsers.next(adminUsers);
    }));
  }

  deleteUserAdmin(userId, docId){
    return this.http.delete(
        `${environment.firebaseUrl}/adminUsers/${docId}.json`
      ).pipe(switchMap(res=>{return this.adminUsers}), take(1), 
      map((adminUsers)=>{
        delete adminUsers[userId];
        this._adminUsers.next(adminUsers);
      }));
  }

  fetchAdminUsers(){
    return this.http.get(
      `${environment.firebaseUrl}/adminUsers.json`
    ).pipe(
      map(resData => {
        const adminUsers = {}
        for (const key in resData) {
          if (resData.hasOwnProperty(key)) {
            adminUsers[resData[key]['id']]=key;
          }
        }
        return adminUsers;
      }
      ),
      tap(adminUsers => {
        this._adminUsers.next(adminUsers);
      }));
  }

  setUserData(resData: AuthResponseData) {
    const expirationDate = new Date(new Date().getTime() + (+resData.expiresIn * 1000));
    this._user.next(new User(resData.localId, resData.displayName, resData.email, resData.refreshToken, expirationDate, resData.idToken, resData.isAdmin));
    this.StoreAuthData(resData.localId, resData.displayName, resData.refreshToken, expirationDate.toISOString(), resData.email, resData.idToken, resData.isAdmin);
    return resData.localId;
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    this._adminUsers.next(null);
    Plugins.Storage.remove({ key: 'authData' });
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

  private StoreAuthData(
    userId: string,
    displayName: String,
    token: string,
    tokenExpirationDate: string,
    email: string,
    idToken: string,
    isAdmin: boolean) {
      const data = JSON.stringify({userId, displayName, token, tokenExpirationDate, email, idToken, isAdmin});
      Plugins.Storage.set({key: 'authData', value: data});
    }
}
