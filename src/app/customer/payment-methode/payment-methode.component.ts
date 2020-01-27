import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';

@Component({
  selector: 'app-payment-methode',
  templateUrl: './payment-methode.component.html',
  styleUrls: ['./payment-methode.component.scss']
})
export class PaymentMethodeComponent implements OnInit {
  public tabData = [];
  constructor( private apiS: ApiService) { }

  ngOnInit() {
    this.tabData = JSON.parse(localStorage.getItem('TabData'));
    console.log(this.tabData);

  }

}
