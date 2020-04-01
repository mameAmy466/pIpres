import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { BodyComponent } from './view/body/body.component';
import { FooterComponent } from './view/footer/footer.component';
import { SousnavbarComponent } from './view/sousnavbar/sousnavbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TaxesComponent } from './customer/taxes/taxes.component';
import { PaymentsComponent } from './payments/payments.component';
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
import { HitoriqueComponent } from './admin/hitorique/hitorique.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeFr);
import { MaterialModule} from './material/material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTreeModule } from '@angular/material/tree';
import { HighchartsChartModule } from 'highcharts-angular';
import { SliderModule } from 'angular-image-slider';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { ValidesComponent } from './admin/valides/valides.component';






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
    HitoriqueComponent,
    PaymentsComponent,
    ValidesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule, ReactiveFormsModule, BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    HighchartsChartModule,
    SliderModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
