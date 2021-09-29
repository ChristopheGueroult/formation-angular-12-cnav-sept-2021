import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  // private obs = new Observable((subscribers) => {
  //   subscribers.next(Math.random());
  // });
  // private subject = new BehaviorSubject(Math.random());
  // property collection
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    console.log('orders service instancied');
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`);

    // this.obs.subscribe((data) => {
    //   console.log(data);
    // });
    // this.obs.subscribe((data) => {
    //   console.log(data);
    // });
    // this.subject.subscribe((data) => {
    //   console.log(data);
    // });
    // this.subject.subscribe((data) => {
    //   console.log(data);
    // });
  }

  // get collection
  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  // set collection
  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  // change state item

  // update item in collection

  // add item in collection
  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  // delete item in collection

  // get item by id
}
