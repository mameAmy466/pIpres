import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valide-ex',
  templateUrl: './valide-ex.component.html',
  styleUrls: ['./valide-ex.component.scss']
})
export class ValideExComponent implements OnInit {
 public methode;
 public amount;
 public valide = false;
  constructor() { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));


  }
  valider() {
   this.valide = true ;
   localStorage.setItem('valide', '' + this.valide);
   localStorage.removeItem('methode1');
  }

}
