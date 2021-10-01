import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  // public collection!: Order[];
  public collection$: Observable<Order[]>;
  public states = Object.values(StateOrder);
  // private sub: Subscription;
  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection;
    // this.sub = this.ordersService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
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
  changeState(item: Order, event: any): void {
    const state = event.target.value;
    this.ordersService.changeState(item, state).subscribe((res) => {
      Object.assign(item, res);
    });
  }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
