import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent} from '../app/customer/payment/payment.component';
import { PaymentMethodeComponent} from '../app/customer/payment-methode/payment-methode.component';
import { TaxesComponent} from '../app/customer/taxes/taxes.component';
import { BodyComponent} from '../app/view/body/body.component';
import { PaymentValidatorComponent } from './customer/payment-validator/payment-validator.component';
import { CompteComponent } from './customer/compte/compte.component';
import { AddCompteComponent } from './customer/add-compte/add-compte.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ValideComponent } from './valide/valide.component';
import { ProfilComponent } from './profil/profil.component';
import { ValiditeExterneComponent } from './validite-externe/validite-externe.component';
import { ValideExComponent } from './valide-ex/valide-ex.component';
import { PaymentsComponent } from './payments/payments.component';
import { HitoriqueComponent } from './admin/hitorique/hitorique.component';


const routes: Routes = [
  {
  path: '' , redirectTo: '/index', pathMatch: 'full'
  },

  {
    path: 'index' , component: BodyComponent
  },
  {
    path: 'taxes', component: TaxesComponent
  },
  {
    path: 'payment.methode', component: PaymentMethodeComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'payments', component: PaymentsComponent
  },
  {
    path: 'historique.transactions', component: HitoriqueComponent
  },
  {
    path: 'payment.valide', component: PaymentValidatorComponent
  },
  {
    path: 'orage-money.html', component: ValiditeExterneComponent
  },
  {
    path: 'paypal.html', component: ValiditeExterneComponent
  },
  {
    path: 'Paiement-carte.html', component: ValiditeExterneComponent
  },
  {
    path: 'Valide', component: ValideComponent
  },
  {
    path: 'Orage-Money-valide.html', component: ValideExComponent
  },
  {
    path: 'carte-valide.html', component: ValideExComponent
  },
  {
    path: 'paypal.pay.html', component: ValideExComponent
  },
  {
    path: 'compte', component: CompteComponent
  },
  {
    path: 'Account', component: AddCompteComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profil', component: ProfilComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
