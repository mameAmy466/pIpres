import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }

  login(user: User) {
    console.log(user);

    if ((user.username === 'admin' && user.password === 'admin') || (user.username === 'user' && user.password === 'user')) {
      return true;
    }
    return false ;
  }
  enrigToken(jwt: string) {
  localStorage.setItem('token', jwt);
  }
isAuthentifiquete() {
   // tslint:disable-next-line: no-unused-expression
   this.login;
   }

}
