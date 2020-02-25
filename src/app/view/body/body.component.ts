import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  user: User;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  isAdmin() {
    if (this.user.username === 'admin' && this.user.password === 'admin') {
      return true;
    }
 }
   isUser() {
  if (this.user.username === 'user' && this.user.password === 'user') {
     return true;
   }
   }

}
