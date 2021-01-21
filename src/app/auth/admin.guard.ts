import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, tap, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(route);
    return this.authService.user.pipe(take(1),
      switchMap(user => {
        if (!user || !user.isAdmin) {
          this.router.navigateByUrl('/places/tabs/discover');
        }else{
          return of(user.isAdmin);
        }
      })
    );
  }
}
