import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { PaiementPartielDto } from 'src/app/m-payment';

@Component({
  selector: 'app-payment-methode',
  templateUrl: './payment-methode.component.html',
  styleUrls: ['./payment-methode.component.scss']
})
export class PaymentMethodeComponent implements OnInit {
  public tabData = [];
  public total: any = 0;
  public total2: any = 0;
  public amount: any = 0;
  public amount1: any = 0;
  public valide = false;
  public methode = '';
  public tabValide = [];
  constructor( private apiS: ApiService) { }

  ngOnInit() {
    this.tabData = JSON.parse(localStorage.getItem('TabData'));
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.total = Number(localStorage.getItem('total'));
    this.total2 = Number(localStorage.getItem('total2'));
    this.amount1 = Number(localStorage.getItem('amount1'));




  }
  // tslint:disable-next-line: new-parens
  recupereMethode(mp = new PaiementPartielDto) {
   const test = this.tabData.indexOf(mp);
   for (let t = 0; t < this.tabData.length; t++) {
    const element = this.tabData[t];
    if (t === test) {
      element.valide = true;
    }
    this.tabValide.push(element);
  }
   this.amount1 = this.amount1 + mp.amount;
   console.log(this.amount1);
   this.amount = mp.amount ;
   console.log(this.amount);
   const total2 = this.total - this.amount1;
   console.log(this.total2);
   localStorage.setItem('total2', '' + total2);
   localStorage.setItem('TabData', JSON.stringify(this.tabValide));
   localStorage.setItem('methode', JSON.stringify(mp.paiementMethodeId));
   localStorage.setItem('amount', '' + this.amount);
   localStorage.setItem('amount1', '' + this.amount1);
  }


}
