import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/model.product';
import { ProductsService } from 'src/app/services/products.service.service';
import { CartItem } from 'src/app/models/cart-item';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  products? : Array<Product>
  p:number = 1;
  cartItems? : Array<CartItem>
  raiseTicketItems? : Array<Object>
  totalPrice:number = 0
  productItem? : Product;
  isCartEmpty : boolean = false;
  constructor(private productService:ProductsService, private router:Router, private route:ActivatedRoute, private toaster:ToastrService) { }

  ngOnInit(): void {
    this.shoppingCart()
    this.productService.retrieveAllProductDetails().subscribe(product=>{
      this.products = product
    },
    (errorResponse)=>{
      console.log(errorResponse.error.error);
    }
    )
  }

  addItemtoCart(id:number){
    if(id){
      this.productService.getProductById(id).subscribe(res => {
        this.productItem = res[0];
        if(this.productItem){
          this.toaster.success("Item Added into Basket", 'Success', {
            timeOut: 3000,
          });
        }else{
          this.toaster.error("Item Does not Exist", 'Error', {
            timeOut: 3000,
          });
        }
        let cartItem = {
          product : this.productItem,
          quantity : 1
        }
        this.getProductInfo(id, cartItem);
      },
      (errorResponse:any) => {
        console.log(errorResponse.error.error);
      });
      setTimeout(() => { this.reloadPage() }, 2000);
      
    }
  }
  
  getProductInfo(id:number, cartItem:CartItem) : void{
    let cartDataObj:any = localStorage.getItem('cart')
    if (JSON.parse(cartDataObj) == null) {
      let cart: any = [];
      cart.push(JSON.stringify(cartItem));
      localStorage.setItem('cart', JSON.stringify(cart));
    } 
    else 
    {
      let cart: any = JSON.parse(cartDataObj);

      let index: number = -1;
      for (var i = 0; i < cart.length; i++) {
        let item: CartItem = JSON.parse(cart[i]);
        if (item.product._id == id) 
        {
          index = i;
          break;
        }
      }
  
      if (index == -1) {
        cart.push(JSON.stringify(cartItem));
        localStorage.setItem('cart', JSON.stringify(cart));
      } 
      else {
        let item: CartItem = JSON.parse(cart[index]);
        item.quantity += 1;
        cart[index] = JSON.stringify(item);
        localStorage.setItem("cart", JSON.stringify(cart));
      }   
    }
  }

  shoppingCart(): void {
    this.cartItems = [];
    let cartDataObj:any = localStorage.getItem('cart')
    let cart = JSON.parse(cartDataObj);
    if (cart != null && cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
          let item = JSON.parse(cart[i]);
          this.cartItems.push({
            product: item.product,
            quantity: item.quantity
          });
        }
    }else{
      this.isCartEmpty = true;
    }
  }

  reloadPage() {
    window.location.reload();
  }
  
  // raiseticket(){
  //   this.router.navigate(["/raise-ticket"]);
  // }
}
