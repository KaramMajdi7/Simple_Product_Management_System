import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'projects/models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL = 'http://localhost:5000/product';

  constructor(private http: HttpClient, private router: Router) { 

  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.URL}`);
  }

  getProductById(id: number | null): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`);
  }

  createProduct(productData: any): Observable<any> {
    const url = 'http://localhost:5000/product/create'; // Modify the endpoint as needed
    return this.http.post(url, productData);
  }
}
