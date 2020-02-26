import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';




@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
   public taxes = [] as any;
   public montantTotal = 0;
  constructor( private apiServe: ApiService ,
               private route: Router ,
               private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.teste();
    // tslint:disable-next-line: no-unused-expression
    this.montantTotal;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 500000,
    });
  }

 teste() {
   this.taxes =  this.apiServe.getAllTax();
    }
  choose(t: any, montant) {
    const index: number = this.apiServe.scheduledPayment.indexOf(t);
    if (index !== -1) {
      this.apiServe.scheduledPayment.splice(index, 1);
      this.montantTotal = this.montantTotal - montant;
    } else {
      this.apiServe.scheduledPayment.push(t);
      this.montantTotal = this.montantTotal + montant;
    }
  }

  save() {
    if (this.apiServe.scheduledPayment.length !== 0) {
      this.route.navigateByUrl('/payment');
      localStorage.setItem('scheduledPayment', JSON.stringify(this.apiServe.scheduledPayment));
    } else {
      const message = 'veuillez sélectionner au moins un element svp';
      const action = 'x';
      this.openSnackBar(message, action);
    }
    }
}
