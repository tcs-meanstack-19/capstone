
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// components
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
//routes
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserService } from './services/user.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { StoreProductComponent } from './components/store-product/store-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { RetrieveProductComponent } from './components/retrieve-product/retrieve-product.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { ShowProductComponent } from './components/show-product/show-product.component';


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
    UserComponent,
    SignUpComponent,
    SignInComponent,
    ShowProductComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
