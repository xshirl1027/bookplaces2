import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase';
// Required for side-effectsnpm install -g firebase-tools

firebase.default.initializeApp({
  apiKey: "AIzaSyDMqXL534Jdd0JTcpdJRQNr1gFpjpR_pes",
  authDomain: "teak-mantis-271722.firebaseapp.com",
  projectId: "teak-mantis-271722",
  databaseURL: "https://teak-mantis-271722.firebaseio.com"
});

// Initialize Cloud Functions through Firebase
var functions = firebase.default.functions();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})


export class AdminPage implements OnInit {
  users:UserResponseData[];
  constructor(private authService: AuthService) { }


  ngOnInit() {
    const getUsers = functions.httpsCallable('getAllUsers');
    getUsers().then((res)=>{
      this.users = res.data;
    });
  }

  onDeleteUser(idToken) {
    this.authService.deleteUser(idToken).subscribe(()=>{
      this.users = this.users.filter(user=>user.uid ==idToken);
    })
  }

  onEditUser(userId) {

  }

}
export interface UserResponseData 
{uid: string,
email: string,
emailVerified: boolean,
displayName: string,
disabled: boolean,
metadata: object,
tokensValidAfterTime: string,
providerData: []
}
