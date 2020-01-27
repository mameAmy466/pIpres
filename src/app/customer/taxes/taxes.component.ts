import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
   private taxes = [];
  constructor( private apiServe: ApiService) { }

  ngOnInit() {
    this.taxes = this.apiServe.getAllTax();
  }


  choose(t: any) {
    const index: number = this.apiServe.scheduledPayment.indexOf(t);
    if (index !== -1) {
      this.apiServe.scheduledPayment.splice(index, 1);
    } else {
      this.apiServe.scheduledPayment.push(t);
    }
    console.log(this.apiServe.scheduledPayment);
  }

  save() {
    localStorage.setItem('scheduledPayment', JSON.stringify(this.apiServe.scheduledPayment))
  }
}
