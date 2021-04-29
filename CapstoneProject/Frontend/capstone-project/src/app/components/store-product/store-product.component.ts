import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service.service';

@Component({
  selector: 'app-store-product',
  templateUrl: './store-product.component.html',
  styleUrls: ['./store-product.component.css']
})
export class StoreProductComponent implements OnInit {
  storeMsg?:String;
  constructor(public proService: ProductsService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
    this.storeMsg = "Data Stored";
  }

}
