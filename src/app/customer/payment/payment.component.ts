import { Component, OnInit } from '@angular/core';
import { ApiService} from '../../service/api.service';
import { MPayment} from '../../m-payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  Mpay = new MPayment();
  public scheduledPayments = [];
  public total = 0;
  public total1 = 0;
  public paymentMethods = [];
  public TabData = [];
  constructor(private apiService: ApiService) {}
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

  }


  addPayment() {
    this.Mpay = new MPayment();
    if ( this.Mpay !== null) {
      this.TabData.push(this.Mpay);
    }

  }
 calculTotal(montant) {
    this.total1 = this.total1 - montant;

  }
  removePay(index) {
    this.TabData.splice(index);
  }
  paymentValide() {
    this.apiService.TabData = this.TabData;
    localStorage.setItem('TabData', JSON.stringify(this.apiService.TabData));

  }
}
