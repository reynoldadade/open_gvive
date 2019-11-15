import {
  FormBuilder,
  FormGroup,
  Validators,
  EmailValidator,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  spin = false;
  constructor(
    private fb: FormBuilder,
    public afAuth: AngularFireAuth,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.passwordForm = this.fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
    });
  }

  forgotPassowrd(form: FormGroup) {
    this.spin = true;
    this.spin = this.sendResetEmail(form.value.email);
  }

  sendResetEmail(email: string) {
    this.afAuth.auth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.passwordForm.reset();
        this.toastr.info('A reset password link has been sent to your email');
      })
      .catch(error => {
        this.toastr.info(error);
        console.log(error);
      });
    return false;
  }
}
