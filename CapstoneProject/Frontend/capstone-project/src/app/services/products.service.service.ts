import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product} from '../models/model.product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http: HttpClient) { }

  storeProductDetailsInfo(productRef:any){
    this.http.post("http://localhost:9090/products/storeProductDetails",productRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  retrieveAllProductDetails():Observable<Product[]>{
     return this.http.get<Product[]>("http://localhost:9090/products/allProductDetails")
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(id:any):any{
    return this.http.delete("http://localhost:9090/products/deleteProductById/"+id,{responseType:'text'});
  }

  updateProductPrice(productRef:any):any{
    return this.http.put("http://localhost:9090/products/updateProductPrice",productRef,{responseType:'text'})
  }

}
