
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
/*   private baseUrl = 'http://localhost:8000/api/'; // Die URL Ihrer Django-API */

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>('http://localhost:8000/api/signup/', userData);
  }

  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };

    return this.http.post<any>('http://localhost:8000/api/login/', credentials);
  }

}

