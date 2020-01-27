import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { BodyComponent } from './view/body/body.component';
import { FooterComponent } from './view/footer/footer.component';
import { SousnavbarComponent } from './view/sousnavbar/sousnavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TaxesComponent } from './customer/taxes/taxes.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { PaymentValidatorComponent } from './customer/payment-validator/payment-validator.component';
import { PaymentMethodeComponent } from './customer/payment-methode/payment-methode.component';
import { CompteComponent } from './customer/compte/compte.component';
import { AddCompteComponent } from './customer/add-compte/add-compte.component';
import { HttpClient} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    FooterComponent,
    SousnavbarComponent,
    TaxesComponent,
    PaymentComponent,
    PaymentValidatorComponent,
    PaymentMethodeComponent,
    CompteComponent,
    AddCompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
