import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environment.apiUrl + "user/"

  constructor(private http: HttpClient) { }

  initSesion(request: Login): Observable<Sesion> {
    return this.http.post<Sesion>(`${this.baseUrl}login`, request);
  }
}
