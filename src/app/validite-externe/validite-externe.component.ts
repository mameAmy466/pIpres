import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validite-externe',
  templateUrl: './validite-externe.component.html',
  styleUrls: ['./validite-externe.component.scss']
})
export class ValiditeExterneComponent implements OnInit {
public methode ;
public amount ;
  constructor() { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));
  }

}
