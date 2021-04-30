import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Checkout } from '../models/checkout';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/product/allProductDetails")
  }

  getProductById(id:any):Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:9090/product/retrieveProductById/"+id)
  }

  storeOrderInfo(orderData:any): Observable<Checkout[]> {
    return this.http.post<Checkout[]>("http://localhost:9090/product/orders", orderData);
  }
}
