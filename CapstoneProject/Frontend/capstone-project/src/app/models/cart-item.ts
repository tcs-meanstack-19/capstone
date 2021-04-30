import { Product } from 'src/app/models/product';

export class CartItem {
    
    constructor(public product:Product, public quantity:number) {}

}
