import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { catchError, throwError, Observable } from 'rxjs';

export function passwordsMatchValidators(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password != confirmPassword) {
      return {
        passwordsDontMatch: true,
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignUpComponent implements OnInit {
  [x: string]: any;
 signUpForm!: FormGroup; // Verwendung von FormGroup

  constructor(private router: Router, private authService: AuthServiceService ) {} // Injizieren des AuthService

  ngOnInit(): void {
    // Initialisieren Sie das FormGroup und die FormControl-Instanzen
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  get email() {
    // for error massage mat-error
    return this.signUpForm.get('email');
  }
   get password() {
    // for error massage mat-error
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    // for error massage mat-error
    return this.signUpForm.get('confirmPassword');
  }


onSubmit() {
  if (this.signUpForm.valid) {
         
    const userData = this.signUpForm.getRawValue(); // Benutzerdaten aus dem Formular

        this.authService.registerUser(userData)
      .pipe(
        catchError((_error: any) => {
          // Fehlerbehandlung hier, z.B. Anzeigen einer Fehlermeldung
          return throwError(() => new Error('Fehler bei der Registrierung'));;
        })
      )
      .subscribe(() => {
        // Erfolgreiche Registrierung, hier zur Bestätigungsseite navigieren
        this.router.navigate(['/emailConformation'])
      }); 
   }
} 


   /*  this.authService.registerUser(userData)
      .pipe(
        catchError((_error: any) => {
          // Fehlerbehandlung hier, z.B. Anzeigen einer Fehlermeldung
          return throwError(() => new Error('Fehler bei der Registrierung'));;
        })
      )
      .subscribe(() => {
        // Erfolgreiche Registrierung, hier zur Bestätigungsseite navigieren
        this.router.navigate(['/emailConformation'])
      }); */


}
 /*  signUpForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    },
    { validators: passwordsMatchValidators() }
  );
  router: any; */

  

  
  /* constructor(
    private authService: AuthServiceService,
  
  ) {}
 */
 /*  ngOnInit(): void {} */