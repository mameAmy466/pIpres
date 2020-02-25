import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valide-ex',
  templateUrl: './valide-ex.component.html',
  styleUrls: ['./valide-ex.component.scss']
})
export class ValideExComponent implements OnInit {
 public methode;
 public amount;
 public valide = false;
  constructor(private root: Router) { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));

  }
  valider() {
   this.valide = true ;
   localStorage.setItem('valide', '' + this.valide);
   localStorage.removeItem('methode1');
  }
  roote() {
    this.methode = 'Carte Bancaire';
    this.root.navigateByUrl('/Paiement-carte.html');
    localStorage.setItem('methode', JSON.stringify(this.methode));
  }

}
