import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  passwordType = 'password';
  iconType = 'fas fa-eye-slash';
  spin = false;
  constructor(
    public afAuth: AngularFireAuth,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
    });
  }

  login(form: FormGroup) {
    this.spin = true;
    this.afAuth.auth
      .signInWithEmailAndPassword(form.value.email, form.value.password)
      .then(response => {
        this.loginForm.reset();
        sessionStorage.setItem('email', response.user.email);
        // console.log(response.user.email);
        this.router.navigate(['home']);
      })
      .catch(error => {
        this.loginForm.reset();
        // this.toastr.error('Invalid user credentials');
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          this.toastr.error('Invalid user credentials');
        } else if (errorCode === 'auth/user-not-found') {
          this.toastr.error('Invalid user credentials');
        } else {
          this.toastr.error(errorMessage);
        }
        // console.log(error);
        this.spin = false;
      });
  }

  showHidePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.iconType =
      this.iconType === 'fas fa-eye-slash' ? 'fas fa-eye' : 'fas fa-eye-slash';
  }
}
