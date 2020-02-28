import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sousnavbar',
  templateUrl: './sousnavbar.component.html',
  styleUrls: ['./sousnavbar.component.scss']
})
export class SousnavbarComponent implements OnInit {
  user: User;
  constructor( private route: Router) { }

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
   logout() {
      localStorage.removeItem('scheduledPayment');
      localStorage.removeItem('total2');
      localStorage.removeItem('TabData');
      localStorage.removeItem('methode');
      localStorage.removeItem('amount');
      localStorage.removeItem('amount1');
      localStorage.removeItem('total');
      localStorage.removeItem('user');
      this.route.navigateByUrl('/login');
   }

}
