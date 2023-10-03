import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { EmailConformationComponent } from './email-conformation/email-conformation.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },  
  { path: 'email-conformation', component: EmailConformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
