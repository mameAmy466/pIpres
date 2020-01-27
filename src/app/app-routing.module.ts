import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent} from '../app/customer/payment/payment.component';
import { PaymentMethodeComponent} from '../app/customer/payment-methode/payment-methode.component';
import { TaxesComponent} from '../app/customer/taxes/taxes.component';
import { BodyComponent} from '../app/view/body/body.component';
import { PaymentValidatorComponent } from './customer/payment-validator/payment-validator.component';
import { CompteComponent } from './customer/compte/compte.component';
import { AddCompteComponent } from './customer/add-compte/add-compte.component';


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
    path: 'pM', component: PaymentMethodeComponent
  },
  {
    path: 'payment', component: PaymentComponent
  },
  {
    path: 'paVlide', component: PaymentValidatorComponent
  },
  {
    path: 'compte', component: CompteComponent
  },
  {
    path: 'Account', component: AddCompteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
