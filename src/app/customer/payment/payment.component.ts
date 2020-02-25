import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api.service';
import {PaiementPartielDto} from '../../m-payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  Mpay = new  PaiementPartielDto();
  public scheduledPayments = [];
  public total = 0;
  public total1 = 0;
  public click = false;
  public paymentMethods = [] as any;
  public TabData = [];
  constructor(private apiService: ApiService ,private route: Router) {}
  ngOnInit() {
    this.TabData.push(this.Mpay);
    this.scheduledPayments = JSON.parse(localStorage.getItem('scheduledPayment'));
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.scheduledPayments.length; i++) {
      const element = this.scheduledPayments[i];
      this.total = this.total + element.paymentAmount;
    }
    this.paymentMethods = this.apiService.getPaymentMethod();
    this.total1 = this.total ;
    this.click = false;
    localStorage.setItem('total', '' + this.total);
  }
  forme() {
    this.click = true;
  }
 calculTotal(montant) {
   if (montant <= this.total1) {
    this.total1 = this.total1 - montant;
   } else {
    alert('réduit le montant');
   }
  }
  addPayment() {
    this.Mpay = new PaiementPartielDto();
    this.TabData.push(this.Mpay);
  }

  removePay(index, amount) {
    this.total1 = this.total1 + amount;
    this.TabData.splice(index);
  }
  removeTab() {
    localStorage.removeItem('scheduledPayment');
    this.route.navigateByUrl('/taxes');
  }
  paymentValide() {
    this.route.navigateByUrl('/payment.methode');
    this.apiService.TabData = this.TabData;
    console.log(JSON.stringify(this.TabData));
    localStorage.setItem('TabData', JSON.stringify(this.apiService.TabData));
  }
}
