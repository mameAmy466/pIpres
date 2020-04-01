import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { User } from 'src/app/user';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  user: User;
  public imagesUrl;
  constructor() { }

  ngOnInit() {
    this.imagesUrl = [
      // '../../../assets/imgs/orange-money_0.png',
      // '../../../assets/imgs/virement.png',
      // '../../../assets/imgs/carteVISA.png',
      // '../../../assets/imgs/free-money1.png',
      // '../../../assets/imgs/Paypal.png',
      // '../../../assets/imgs/Wari_logo.png',
      // '../../../assets/imgs/logo_yup_fond_blanc.png'
          '../../../assets/images/OM.png',
      '../../../assets/images/virement.png',
      '../../../assets/images/VISA.png',
      '../../../assets/imgs/free-money1.png',
      '../../../assets/images/paypal.png',
      '../../../assets/images/Wari_logo.png',
      '../../../assets/images/logo_yup_fond_blanc.png'
        ];
    this.user = JSON.parse(localStorage.getItem('user'));
  }
  isAdmin() {
    if (this.user.username === 'admin' && this.user.password === 'admin') {
      return true;
    }
 }
   isUser() {
  if (this.user.username === 'user' && this.user.password === 'user') {
     return true;
   }
   }

}
