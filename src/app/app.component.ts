import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public affiche = false;
  production = environment.production;
  constructor( private router: Router ) {}
  ngOnInit(): void {
   this.router.navigateByUrl('/login');
  }

}
