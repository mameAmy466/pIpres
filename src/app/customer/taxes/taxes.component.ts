import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
   public taxes = [] as any;
   public montantTotal = 0;
  constructor( private apiServe: ApiService , private route: Router) { }

  ngOnInit() {
    this.teste();
    // tslint:disable-next-line: no-unused-expression
    this.montantTotal;
  }

 teste() {
   this.taxes =  this.apiServe.getAllTax();
    }
  choose(t: any, montant) {
    const index: number = this.apiServe.scheduledPayment.indexOf(t);
    if (index !== -1) {
      this.apiServe.scheduledPayment.splice(index, 1);
    } else {
      this.apiServe.scheduledPayment.push(t);
      this.montantTotal = this.montantTotal + montant;
    }
  }

  save() {
    if (this.apiServe.scheduledPayment.length !== 0) {
      this.route.navigateByUrl('/payment');
    }
    localStorage.setItem('scheduledPayment', JSON.stringify(this.apiServe.scheduledPayment));
    }
}
