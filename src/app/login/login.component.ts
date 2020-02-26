import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
/*private jwt;*/
user: User;
  constructor( private loginService: LoginService ,
               private router: Router ,
               private _snackBar: MatSnackBar) { }

  ngOnInit() {
    localStorage.clear();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 500000,
    });
  }

  OneClique(data) {
   const test =  this.loginService.login(data);
   if (test) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigateByUrl('/');
   } else {
    const message = 'login ou mot de passe invalide!';
    const action = 'x';
    this.openSnackBar(message, action);
   }
  }
}
