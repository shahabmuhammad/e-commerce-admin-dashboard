import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseService {
protected override url!: string;
  constructor(private http: HttpClient) {
    super();
    this.url = 'https://ecommerceadmindashboard-default-rtdb.firebaseio.com/'
  }

  // Create a new order
  createOrder(orderData: any): Observable<any> {
    const url = this.url + 'orders';
    return this.http.post(url, orderData);
  }

  // Get a specific order by ID
  getOrderById(orderId: string): Observable<any> {
    const url = this.url + 'orders/' + orderId;
    return this.http.get(url);
  }

  // Get all orders
  getAllOrders(): Observable<any[]> {
    const url = this.url + 'orders';
    return this.http.get<any[]>(url);
  }

  // Update an existing order by ID
  updateOrder(orderId: string, updatedData: any): Observable<any> {
    const url = this.url + 'orders/' + orderId;
    return this.http.put(url, updatedData);
  }

  // Delete an order by ID
  deleteOrder(orderId: string): Observable<any> {
    const url = this.url + 'orders/' + orderId;
    return this.http.delete(url);
  }
}
