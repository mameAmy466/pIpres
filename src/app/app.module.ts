import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';




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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValideComponent } from './valide/valide.component';
import { ProfilComponent } from './profil/profil.component';
import { ValiditeExterneComponent } from './validite-externe/validite-externe.component';
import { ValideExComponent } from './valide-ex/valide-ex.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);



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
    AddCompteComponent,
    LoginComponent,
    RegisterComponent,
    ValideComponent,
    ProfilComponent,
    ValiditeExterneComponent,
    ValideExComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule,
    SweetAlert2Module,
    SweetAlert2Module.forChild({ /* options */ })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
