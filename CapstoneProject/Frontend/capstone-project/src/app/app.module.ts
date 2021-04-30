import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthModule } from './auth/auth.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { ShowProductComponent } from './components/show-product/show-product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RaiseTicketComponent } from './components/raise-ticket/raise-ticket.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ShowProductComponent,
    RaiseTicketComponent,
    HeaderNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        positionClass:"toast-top-right",
        closeButton: true,
        preventDuplicates: true,
      },
    ),
    // AuthModule            take from other 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
