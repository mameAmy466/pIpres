import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
/*private jwt;*/

  constructor( private loginServece: LoginService) { }

  ngOnInit() {
    localStorage.clear();
  }
  OneClique(data) {
  }
}
