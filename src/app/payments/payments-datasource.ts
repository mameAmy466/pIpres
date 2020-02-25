import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';


// TODO: Replace this with your own data model type
export interface PaymentsItem {
  documentNumbre: string;
  libelle: string;
  montant: number;
  datePayement: string;
  paymentMethode: string;
  id: number;
}


// TODO:  replace this with real  data  from you r appli cation
const  EXAMPLE_DATA: PaymentsItem[] = [
    {id: 1, documentNumbre: '50000004012', libelle: 'TVA', montant: 100000000,  datePayement: '05/06/2019', paymentMethode:'Paypal'},
    {id: 3, documentNumbre: '12345622333', libelle: 'VRS', montant: 450000000,  datePayement: '01/01/2020', paymentMethode:'Carte Bancaire'},
    {id: 4, documentNumbre: '40782566222', libelle: 'BRS', montant: 50000000,   datePayement: '11/06/2019', paymentMethode:'Virement'},
    {id: 6, documentNumbre: '40782566222', libelle: 'CGU', montant: 200000000,  datePayement: '05/06/2019', paymentMethode:'Virement'},
    {id: 7, documentNumbre: '12345622333', libelle: 'BRS', montant: 80000000,   datePayement: '11/06/2019', paymentMethode:'Orange Money'},
    {id: 2, documentNumbre: '85221563212', libelle: 'TVA', montant: 50000000,   datePayement: '01/0/2020', paymentMethode:'Virement'},
    {id: 8, documentNumbre: '12345622333', libelle: 'IS',  montant: 450000000,  datePayement: '11/06/2019', paymentMethode:'Orange Money'},
    {id: 9, documentNumbre: '12345622333', libelle: 'BRS', montant: 80000000,   datePayement: '05/06/2019', paymentMethode: 'Paypal'},
    {id: 5, documentNumbre: '40782566222', libelle: 'VRS', montant: 45000000,   datePayement: '01/0/2020', paymentMethode: 'Virement'},
    {id: 10, documentNumbre: '85221563212', libelle: 'TVA', montant: 45000000000, datePayement: '05/06/2019',
     paymentMethode: 'Carte Bancaire'},
    {id: 11, documentNumbre: '12345622333', libelle: 'IS',  montant: 45000000000, datePayement: '11/06/2019',
    paymentMethode: 'Carte Bancaire'},
    {id: 13, documentNumbre: '40782566222', libelle: 'VRS', montant: 80000000,  datePayement: '11/06/2019', paymentMethode: 'Virement'},
    {id: 14, documentNumbre: '85221563212', libelle: 'CGU', montant: 50000000, datePayement: '11/06/2019', paymentMethode:  'Orange Money'},
    {id: 15, documentNumbre: '12345622333', libelle: 'IS',  montant: 45000000000, datePayement: '11/06/2019', paymentMethode: 'Virement'},
    {id: 16, documentNumbre: '85221563212', libelle: 'TVA', montant: 50000000, datePayement: '11/06/2019', paymentMethode: 'Virement'},
    {id: 12, documentNumbre: '24558652652', libelle: 'VRS', montant: 45000000000, datePayement: '11/06/2019', paymentMethode: 'Paypal'},
    {id: 17, documentNumbre: '12345622333', libelle: 'BRS', montant: 45000000000, datePayement: '05/05/2019',
     paymentMethode: 'Carte Bancaire'},
    {id: 18, documentNumbre: '12345622333', libelle: 'BRS', montant: 45000000000, datePayement: '11/06/2019',
    paymentMethode: 'Orange Money'},
    {id: 19, documentNumbre: '24558652652', libelle: 'TVA', montant: 80000000, datePayement: '11/06/2019', paymentMethode: 'Paypal'},
    {id: 20, documentNumbre: '24558652652', libelle: 'IS',  montant: 9000000000, datePayement: '05/12/2019',
     paymentMethode: 'Orange Money'},

  ];

/**
 * Data source for the Payments view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export default class PaymentsDataSource extends DataSource<PaymentsItem> {
  dataSource = new MatTableDataSource(EXAMPLE_DATA);
  data: PaymentsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PaymentsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PaymentsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PaymentsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'documentNumbre': return compare(a.documentNumbre, b.documentNumbre, isAsc);
        case 'libelle': return compare(a.libelle, b.libelle, isAsc);
        case 'datePayement': return compare(a.datePayement, b.datePayement, isAsc);
        case 'paymentMethode': return compare(a.paymentMethode, b.paymentMethode, isAsc);
        case 'montant': return compare(a.montant, b.montant, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
