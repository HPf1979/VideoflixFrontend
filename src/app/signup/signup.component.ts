import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms'; 
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';



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

  constructor(private authService: AuthServiceService, private router: Router) {} // Injizieren des AuthService

  ngOnInit(): void {
    // Initialisieren Sie das FormGroup und die FormControl-Instanzen
    this.signUpForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
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
    const email = this.signUpForm.get('email')?.value || '';

    this.authService.sendEmailConfirmation(email).subscribe(() => {
      // Erfolgreiches Senden der Bestätigungsemail
      // Fahrfort, um die Benutzerdaten an das Backend zu senden, wenn die E-Mail bestätigt ist
      // Implementier hier die Logik, um die Benutzerdaten an das Backend zu senden
      this.router.navigate(['./email-confirmation']); 
    });
  }
}
}




