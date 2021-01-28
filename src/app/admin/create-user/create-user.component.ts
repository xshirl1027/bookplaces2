import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  @ViewChild('f', { static: false }) form: NgForm;
  constructor(private modalCtrl: ModalController,
    private authService: AuthService,
    private alertCtrl: AlertController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  private showAlert(header:string, message: string) {
    this.alertCtrl.create({header: header, message: message, buttons: ['okay']})
    .then((ctrl) => {
      ctrl.present();
    });
  }

  onSignUpUser() {
    if (!this.form.valid || this.form.value.password != this.form.value.password2) {
      return;
    }
    this.authService.signup(this.form.value['email'],this.form.value['password'],this.form.value['username']).subscribe((resData) => {
      let header = 'Sign up Successful';
      let message = 'User is created';
      this.showAlert(header, message);
      this.modalCtrl.dismiss(
        {},
        'confirm'
      );
    }, error => {
      let header = "Authentication failed";
      const code = error.error.error.message;
      let message = 'could not sign up, please try again';
      if (code === 'EMAIL_EXISTS') {
        message = 'this email already exists';
      }
      if (code === 'EMAIL_NOT_FOUND') {
        message = 'this email has not been registered';
      }
      if (code === 'INVALID_PASSWORD') {
        message = 'this password is invalid';
      }
      this.showAlert(header, message);
    });
  }
}
