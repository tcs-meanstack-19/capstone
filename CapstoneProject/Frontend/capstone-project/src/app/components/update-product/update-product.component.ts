import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateMsg?:String;
  constructor(public productSer: ProductsService) { }

  ngOnInit(): void {
  }

  updatePrice(productRef:any){
    console.log(productRef);
    this.productSer.updateProductPrice(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}
