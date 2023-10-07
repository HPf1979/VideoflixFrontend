import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { catchError, throwError} from 'rxjs';

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
  errorMessage: string | undefined;

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

  login() {
    if (!this.loginForm.valid) {
    return; // Formular ist nicht gültig, beenden
  }
         
  const email: string = this.loginForm.get('email')!.value as string;
  const password: string = this.loginForm.get('password')!.value as string;

  // Anmeldeinformationen Backend senden
   this.authService
     .login(email, password)
     .pipe(
      catchError((_error: any) => {
        this.errorMessage = 'Login Fehlermeldung gespeichert'; // Fehlermeldung speichern
        return throwError(() => new Error('Login fehlgeschlagen'));
      })
    )
    .subscribe({
      next: () => {
        // Erfolgreiche eingeloggt
        this.router.navigate(['/movie-list']);
      },
      error: (error) => {
        // Fehler beim Einloggen, behandeln Sie den Fehler entsprechend
        console.error('Login fehlgeschlagen', error);
      }
    });
}
}


/*  if (!this.loginForm.valid) {
      // if not valid,
      return; // we will do nothing we will not go to proceed
    } */

/*     this.authService.login(email, password)
   .pipe(
        catchError((_error: any) => {
          // Fehlerbehandlung hier, z.B. Anzeigen einer Fehlermeldung
          return throwError(() => new Error('Login fehlgeschlagen'));;
        })
      )
      .subscribe(() => {
        // Erfolgreiche eingeloggt
        this.router.navigate(['/movie-list'])
      }); 
} */