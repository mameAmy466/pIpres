import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';
import { Forme } from '../forme';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private tax = [

   {
     id : 5,
    libeller: 'Montant total des Operation',
    sommes : 100000000
   } ,
   {
     id : 10,
     libeller: 'Affaires à l\'exportation taxables à l\'intérieur-taux normal',
     sommes : 50000000
    },
    {
     id : 15,
     libeller: 'Affaires à l\'exportation taxables à l\'intérieur-taux réduit',
     sommes : 200000
    },
    {
     id : 20,
     libeller: 'Affaires à l\'exportation non taxables à l\'intérieur-Tx Norm.',
     sommes : 400000000
    },
    {
     id : 25,
     libeller: 'Affaires à l\'exportation non taxables à l\'intérieur-Tx Réd.',
     sommes : 52000000
    },
    {
     id : 30,
     libeller: 'Affaires réalisées à l\'intérieur non taxables-Taux normal',
     sommes : 63000000
    },
    {
     id : 35,
     libeller: 'Affaires réalisées à l\'intérieur non taxables-Taux reduit',
     sommes : 6000000
    },
    {
     id : 40,
     libeller: 'Affaires réalisées à l\'intérieur taxables mais exonerées-TN',
     sommes : 10000000
    },
    {
     id : 45,
     libeller: 'Affaires réalisées à l\'intérieur taxables mais exonérées-TR',
     sommes : 8000000
    },
    {
     id : 50,
     libeller: 'Affaires réalisées en suspension de la TVA-Taux normal',
     sommes : 780000000
    }
  ];
  private allTax = [
    {
      id: 1,
      natureOfTax: 'Général',
      periodOfTaxation: 'novembre 2020',
      paymentAmount: 1058400,
      documentNumber: '12551',
      reference: 4598,
      eligibilityDate: '15/12/2020'
    },
    {
      id: 2,
      natureOfTax: 'RC',
      periodOfTaxation: 'novembre 2020',
      paymentAmount: 256320,
      documentNumber: '12551',
      reference: 4598,
      eligibilityDate: '15/12/2020'
    }
  ];
  private paymentMethod = [
    {
      id: 1,
      name: 'Orange Money'
    },
    {
      id: 2,
      name: 'Paypal'
    },
    {
      id: 3,
      name: 'Carte Bancaire'
    },
    {
      id: 4,
      name: 'Virement'
    }
    ,
    {
      id: 5,
      name: 'Wari'
    },
    {
      id: 6,
      name: 'Free Money'
    },
    {
      id: 7,
      name: 'Yup'
    }
  ];

  private banques = [
    {
      id: 1,
      name: 'BICIS (SN1547823694)'
    },
    {
      id: 2,
      name: 'CBAO (SN258946731)'
    },
    {
      id: 3,
      name: 'BOA (SN589467123)'
    }
  ];
  public scheduledPayment = [];
  public TabData = [];


  constructor() { }

  getBanques() {
    return this.banques;
  }
  getAllTax() {
    return this.allTax;
  }
  getScheduledPayment() {
    return this.scheduledPayment;
  }
  getPaymentMethod() {
    return this.paymentMethod;
  }
}
