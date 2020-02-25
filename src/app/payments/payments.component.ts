import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import PaymentsDataSource, { PaymentsItem } from './payments-datasource';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<PaymentsItem>;
  dataSource: PaymentsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'documentNumbre', 'libelle', 'montant', 'datePayement', 'paymentMethode'];

  ngOnInit() {
    this.dataSource = new PaymentsDataSource();

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    // tslint:disable-next-line: no-unused-expression
    this.applyFilter;
  }

   applyFilter(event: Event) {
     console.log(event);
     this.dataSource.applyFilter(event);
  }

}
