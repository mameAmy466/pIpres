import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validite-externe',
  templateUrl: './validite-externe.component.html',
  styleUrls: ['./validite-externe.component.scss']
})
export class ValiditeExterneComponent implements OnInit {
public methode ;
public amount ;
public annees = [];
public mois = [];
  constructor() { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));
    this.annees = [
     '2020',
     '2019',
     '2018',
     '2017',
     '2016',
     '2015',
     '2014',
     '2013',
     '2012',
     '2011',
     '2010',
     '2009',
     '2008',
     '2007',
     '2006',
     '2005',
     '2004',
     '2003',
     '2002',
     '2001',
     '2000'
    ];
    this.mois = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ];
  }
  OneClique(data) {
    console.log(data);
  }
  OneClique1(data) {
    console.log(data);
  }

}
