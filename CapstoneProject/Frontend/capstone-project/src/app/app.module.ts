import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreProductComponent } from './components/store-product/store-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { RetrieveProductComponent } from './components/retrieve-product/retrieve-product.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    RetrieveProductComponent,
    ViewRequestsComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AdminSigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
