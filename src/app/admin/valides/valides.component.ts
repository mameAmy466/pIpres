import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valides',
  templateUrl: './valides.component.html',
  styleUrls: ['./valides.component.scss']
})
export class ValidesComponent implements OnInit {
  public methode;
  public amount;
  constructor() { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));
  }

}
