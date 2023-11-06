import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './signup/signup.component';
import { EmailConformationComponent } from './emailConformation/emailConformation.component';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'emailConformation', component: EmailConformationComponent},  
  { path: 'movie-list', component: MovieListComponent},  
  { path: 'more-info', component: MoreInfoComponent},  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'videos', component: MovieListComponent },
  { path: 'show-movie', component: ShowMovieComponent },
  { path: 'impressum', component: ImpressumComponent },
   { path: 'data-protection', component: DataProtectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
