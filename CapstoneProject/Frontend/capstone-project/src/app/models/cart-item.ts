import { Product } from 'src/app/models/model.product';

export class CartItem {
    
    constructor(public product:Product, public quantity:number) {}

}
