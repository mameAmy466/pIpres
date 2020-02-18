import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valide',
  templateUrl: './valide.component.html',
  styleUrls: ['./valide.component.scss']
})
export class ValideComponent implements OnInit {
 public methode = '' ;
 public valide = false ;
  constructor() { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));

  }
  valider() {
   this.valide = true ;
   localStorage.setItem('valide', '' + this.valide);
   localStorage.removeItem('methode1');
  }

}
