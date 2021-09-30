import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AbstractErrorHandler } from '../abstract/abstract-error-handler';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService extends AbstractErrorHandler {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    super();
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((flux) => {
        console.log(flux);
      }),
      catchError(this.handleError)
    );
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
