import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  user:User;
  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit(form: NgForm){
    this.authService.updateUser(this.user.idToken, form.value['display-name'], form.value['email'], form.value['password'], 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fmcgilltribune.com%2Finternet-anonymity%2F&psig=AOvVaw1T0ka32kmRcF-C_krnSrPM&ust=1610147664023000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjx1c75iu4CFQAAAAAdAAAAABAD').subscribe((resData)=>{
    });
  }

}
