import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

 sendEmailConfirmation(email: string): Observable<any> {
    const requestBody = { email: email };
    return this.http.post<any>('http://localhost:8000/send_email_confirmation/', requestBody);
   
  }
}
/* Die sendEmailConfirmation-Methode sendet die E-Mail-Adresse an Backend-API, die die Bestätigungsemail verschicken soll. */