import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  constructor(private http: HttpClient, private router: Router) { }

  sendEmailConfirmation(email: string): Observable<any> {
    const requestBody = { email: email };
    return this.http.post<any>('http://localhost:8000/send_email_confirmation/', requestBody)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Fehler beim Senden der Bestätigungsemail:', error);
          // Hier können Sie zusätzliche Maßnahmen ergreifen, um mit dem Fehler umzugehen
          // Zum Beispiel eine Fehlermeldung anzeigen oder eine andere Aktion ausführen
          return throwError(error) as Observable<any>;
        })
      );
  }
}

/* Die sendEmailConfirmation-Methode sendet die E-Mail-Adresse an Backend-API, die die Bestätigungsemail verschicken soll. */