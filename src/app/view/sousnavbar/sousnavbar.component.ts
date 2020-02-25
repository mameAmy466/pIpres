import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-sousnavbar',
  templateUrl: './sousnavbar.component.html',
  styleUrls: ['./sousnavbar.component.scss']
})
export class SousnavbarComponent implements OnInit {
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
