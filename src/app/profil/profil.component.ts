import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
 public tax ;
 public click =false
  constructor( private apiserv: ApiService) { }

  ngOnInit() {
 this.tax = this.apiserv.getAllTax();

  }
  affich(){
    if (this.click) {
     this.click =false;
    }
    this.click = true ;
  }

}
