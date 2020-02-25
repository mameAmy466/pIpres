import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
/*private jwt;*/
user: User;
  constructor( private loginService: LoginService , private router: Router) { }

  ngOnInit() {
    localStorage.clear();
  }


  OneClique(data) {
   const test =  this.loginService.login(data);
   if (test) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigateByUrl('/');
   }
  }
}
