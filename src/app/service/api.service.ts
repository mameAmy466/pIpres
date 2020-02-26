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
      natureOfTax: 'VRS',
      periodOfTaxation: '08-2019',
      paymentAmount: 50000,
      documentNumber: '171216000',
      eligibilityDate: '31/09/2019'
    },
    {
      id: 2,
      natureOfTax: 'IS',
      periodOfTaxation: '05-2019',
      paymentAmount: 750000,
      documentNumber: '150019160',
      eligibilityDate: '31/08/2019'
    },
    {
      id: 3,
      natureOfTax: 'TVA',
      periodOfTaxation: '03-2019',
      paymentAmount: 500000,
      documentNumber: '148019160',
      eligibilityDate: '31/06/2019'
    },
    {
      id: 4,
      natureOfTax: 'BRS',
      periodOfTaxation: '11-2019',
      paymentAmount: 50000,
      documentNumber: '146019160',
      eligibilityDate: '31/12/2019'
    },
    {
      id: 5,
      natureOfTax: 'CGU',
      periodOfTaxation: '12-2019',
      paymentAmount: 1000000,
      documentNumber: '150019160',
      eligibilityDate: '31/11/2019'
    }
  ];
  private paymentMethod = [
    {
      id: 1,
      name: 'Orange Money'
    },
    {
      id: 3,
      name: 'Paypal'
    },
    {
      id: 4,
      name: 'Carte Bancaire'
    },
    {
      id: 5,
      name: 'Virement'
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
