import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List orders';
  public headers: string[];
  public collection!: Order[];
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => {
      this.collection = data;
    });
    this.headers = [
      'Type',
      'Name',
      'Nb Jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'State',
    ];
  }
  ngOnInit(): void {}
  changeTitle(): void {
    this.title = 'My new title';
  }

  public total(val: number, coef: number, tva?: number): number {
    console.log('total called');

    if (tva) {
      return val * coef * (1 + tva / 100);
    }
    return val * coef;
  }
}
