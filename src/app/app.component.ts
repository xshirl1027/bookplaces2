import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { User } from './auth/user.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  private previousAuthState = false;
  private adminSub: Subscription;
  private user: User;
  constructor(
    private platform: Platform,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('SplashScreen')) {
        Plugins.SplashScreen.hide();
      }
    });
  }

  ngOnInit() {
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
    });
    this.adminSub = this.authService.user.subscribe(user=>{
      this.user=user;
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
    if(this.adminSub) {
      this.adminSub.unsubscribe();
    }
  }
}
