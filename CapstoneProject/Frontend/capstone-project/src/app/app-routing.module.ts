import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { RaiseTicketComponent } from './components/raise-ticket/raise-ticket.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

const routes: Routes = [
  { path: 'shop-products', component: ShowProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'raiseTicket', component:RaiseTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []  // mention the 
})
export class AppRoutingModule { }
