import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public jwt: '';
  constructor( private http: HttpClient) { }
  login(data) {
    return this.http.post('http://192.168.10.114:8080/api/authenticate', data,{observe: 'response'});
  }
  enrigToken(jwt: string) {
  localStorage.setItem('token', jwt);
  }
  /*isAuthentifiquete() {
    const jwt = localStorage.getItem('token');

   }*/

}
