import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmailConformationComponent } from './emailConformation/emailConformation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HeaderComponent,
    EmailConformationComponent,
    LoginComponent,
    MovieListComponent,
    MoreInfoComponent,
    ShowMovieComponent,
    ImpressumComponent,
    DataProtectionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
