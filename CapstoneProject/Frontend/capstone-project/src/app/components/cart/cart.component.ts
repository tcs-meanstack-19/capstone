import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item'
import { Product } from 'src/app/models/model.product';
import { ProductsService } from 'src/app/services/products.service.service';
import { Checkout } from 'src/app/models/checkout'
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';  //auth service to authenticate user

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems?: Array<CartItem>;
  totalPrice:number = 0;
  productItem?: Product;
  isCartEmpty : boolean = false;
  removeItem : boolean = false;
  // private decodetoken;

  constructor(private productService:ProductsService, private router:Router, private route:ActivatedRoute, private toaster:ToastrService, private auth:UserService) { } // add private auth:AuthService

  ngOnInit(): void {
    this.shoppingCart();
    // this.decodetoken = JSON.parse(localStorage.getItem('auth_meta'))
  }

  getProductInfo(id:number, cartItem:CartItem) : void {
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
        if(this.removeItem)
        {
          item.quantity -= 1;
        }
        else
        {
          item.quantity += 1;
          cart[index] = JSON.stringify(item);
        }
        if(item.quantity > 0)
        {
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
        else
        {
          this.removeItemFromCart(id);
        }
      }   
    }
  }

  shoppingCart(): void {
    this.totalPrice = 0;
    this.cartItems = [];
    let cartDataObj:any = localStorage.getItem('cart')
    let cart = JSON.parse(cartDataObj);
    if (cart != null && cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
          let item = JSON.parse(cart[i]);
          this.cartItems.push({
            product: item.product,
            quantity: item.quantity,
          });
          this.totalPrice += item.product.price * item.quantity;
        }
    }else{
      this.isCartEmpty = true;
    }
  }

  removeItemFromCart(id:number){
    let cartDataObj:any = localStorage.getItem('cart')
    let cart: any = JSON.parse(cartDataObj);
    
    for (var i = 0; i < cart.length; i++) {
      let item: CartItem = JSON.parse(cart[i]);
      if (item.product._id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    if(cartDataObj){
      this.toaster.info("Item Deleted From Basket", 'Success', {
        timeOut: 5000,
      });
    }else{
      this.toaster.error("Item Does not Exist", 'Error', {
        timeOut: 3000,
      });
    }
    this.shoppingCart();
  }

  increaseItemQuantity(id:number, quant:number){
    if(id){
      this.removeItem = false;
      this.productService.getProductById(id).subscribe(res => {
      this.productItem = res[0];
      let cartItem = {
          product : this.productItem,
          quantity : quant
        }
        this.getProductInfo(id, cartItem);
        if(id){
          this.toaster.success("Item Incremented into Basket", 'Success', {
            timeOut: 2000,
          });
        }else{
          this.toaster.error("Item Does not Exist", 'Error', {
            timeOut: 2000,
          });
        }
        this.shoppingCart();
      },
      (errorResponse) => {
        console.log(errorResponse.error.error);
      });
    }
  }

  decreaseItemQuantity(id:number, quant:number){
  if(id){
    this.removeItem = true;
    this.productService.getProductById(id).subscribe(res => {
      this.productItem = res[0];
      let cartItem = {
        product : this.productItem,
        quantity : quant
      }
      this.getProductInfo(id, cartItem);
      if(id){
        this.toaster.warning("Item Decremented from Basket", 'Success', {
          timeOut: 2000,
        });
      }else{
        this.toaster.error("Item Does not Exist", 'Error', {
          timeOut: 2000,
        });
      }
      this.shoppingCart();
      },
      (errorResponse) => {
        console.log(errorResponse.error.error);
      });
    }
  }

  checkoutCart(){
    let cartDataObj:any = localStorage.getItem('cart')
    let cart: any = JSON.parse(cartDataObj);
    let cartCheckoutItemList : Array<Checkout> = [];
    // let totalCart: number = 0
    
    for (var i = 0; i < cart.length; i++){
      let item: CartItem = JSON.parse(cart[i]);
      // let totalPrice = item.product.price * item.quantity
      // totalCart+=totalPrice
      let checkoutItem : Checkout;
      checkoutItem = {
        userId: this.auth.getUserById(),
        productId : item.product._id,
        quantity : item.quantity, 
        totalPrice : item.product.price * item.quantity
      }
        // console.log(checkoutItem)
        cartCheckoutItemList.push(checkoutItem);
    }
    // console.log(totalCart)
    this.productService.storeOrderInfo(cartCheckoutItemList).subscribe(() => {
      localStorage.setItem('cart', JSON.stringify(null));
      this.router.navigate(["/orders"]);
    },
    (errorResponse) => {
      console.log(errorResponse.error.error);
    });
  }
}
