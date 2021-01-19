import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { Plugins, Capacitor } from '@capacitor/core';
import { Subscription } from 'rxjs';

import { AuthService } from './auth/auth.service';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  private authSub: Subscription;
  private previousAuthState = false;
  private isAdmin:boolean = false;
  private adminSub: Subscription;
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
    console.log("authorized: ");
    this.authSub = this.authService.userIsAuthenticated.subscribe(isAuth => {
      console.log(isAuth);
      if (!isAuth && this.previousAuthState !== isAuth) {
        this.router.navigateByUrl('/auth');
      }
      this.previousAuthState = isAuth;
    });
    this.adminSub = this.authService.userIsAdmin.subscribe(isAdmin=>{
      this.isAdmin=isAdmin;
    });
    this.authService.checkUserIsAdmin().subscribe(isAdmin=>{
      this.isAdmin=isAdmin;
    });
  }

  onLogout() {
    this.authService.logout();
    this.isAdmin = null;
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
