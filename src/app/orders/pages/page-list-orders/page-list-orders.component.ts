import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public title = 'List orders';
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((data) => {
      console.log(data);
    });
  }
  ngOnInit(): void {}
  changeTitle(): void {
    this.title = 'My new title';
  }
}
