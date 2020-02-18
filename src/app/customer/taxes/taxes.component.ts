import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent implements OnInit {
   private taxes = [] as any;
  constructor( private apiServe: ApiService , private route: Router) { }

  ngOnInit() {
    this.teste();
  }

 teste() {
   this.taxes =  this.apiServe.getAllTax();
    }

  choose(t: any) {
    const index: number = this.apiServe.scheduledPayment.indexOf(t);
    if (index !== -1) {
      this.apiServe.scheduledPayment.splice(index, 1);
    } else {
      this.apiServe.scheduledPayment.push(t);
    }
  }

  save() {
    if (this.apiServe.scheduledPayment.length !== 0) {
      this.route.navigateByUrl('/payment');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'sélectionner un élément s\'il vous plaît!',
      });
    }
      localStorage.setItem('scheduledPayment', JSON.stringify(this.apiServe.scheduledPayment));
    }
}
