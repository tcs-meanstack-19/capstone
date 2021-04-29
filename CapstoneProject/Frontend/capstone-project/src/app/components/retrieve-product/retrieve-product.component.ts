import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model.product';
import { ProductsService } from 'src/app/services/products.service.service';

@Component({
  selector: 'app-retrieve-product',
  templateUrl: './retrieve-product.component.html',
  styleUrls: ['./retrieve-product.component.css']
})
export class RetrieveProductComponent implements OnInit {

  products?:Array<Product>
  constructor(public productSer: ProductsService) { }

  ngOnInit(): void {
    this.productSer.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }


}
