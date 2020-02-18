import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-payment-validator',
  templateUrl: './payment-validator.component.html',
  styleUrls: ['./payment-validator.component.scss']
})
export class PaymentValidatorComponent implements OnInit {
  public methode = '';
  public amount: any = 0;
  public banques = [];
  constructor( private api: ApiService) { }

  ngOnInit() {
    this.methode = JSON.parse(localStorage.getItem('methode'));
    this.amount = Number(localStorage.getItem('amount'));
    this.banques = this.api.getBanques();
  }
  OneClique(data) {
    console.log(data);
  }

}
