import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  // Create a new product
  createProduct(productData: any): Observable<any> {
    const url = this.url + 'product';
    return this.http.post(url, productData);
  }

  // Get a specific product by ID
  getProductById(productId: string): Observable<any> {
    const url = this.url + 'product/' + productId;
    return this.http.get(url);
  }

  // Get all products
  getAllProducts(): Observable<any[]> {
    const url = this.url + 'product';
    return this.http.get<any[]>(url);
  }

  // Update an existing product by ID
  updateProduct(productId: string, updatedData: any): Observable<any> {
    const url = this.url + 'product/' + productId;
    return this.http.put(url, updatedData);
  }

  // Delete a product by ID
  deleteProduct(productId: string): Observable<any> {
    const url = this.url + 'product/' + productId;
    return this.http.delete(url);
  }
}
