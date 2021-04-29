import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  deleteMsg?: String;
  constructor(public productSer: ProductsService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.productSer.deleteProductById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }

}
