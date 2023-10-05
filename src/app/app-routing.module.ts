import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { EmailConformationComponent } from './emailConformation/emailConformation.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
 /*   {
    path: 'emailConfirmation',
    loadChildren: () =>
      import('./path-to-your-email-confirmation-module/email-confirmation.module').then(
        (m) => m.EmailConfirmationModule
      ),
  }, */
 { path: 'emailConformation', component: EmailConformationComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
