import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { catchError, throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router, private authService: AuthServiceService 
  ) {}

  ngOnInit(): void {}
  get email() {
    // for error massage mat-error
    return this.loginForm.get('email');
  }

  get password() {
    // for error massage mat-error
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      // if not valid,
      return; // we will do nothing we will not go to proceed
    }
}
}