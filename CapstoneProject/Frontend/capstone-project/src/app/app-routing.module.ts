import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { RetrieveProductComponent } from './components/retrieve-product/retrieve-product.component';
import { StoreProductComponent } from './components/store-product/store-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';


const routes: Routes = [
  {path:"\Retrieve",component:RetrieveProductComponent},
  {path:"\Store",component:StoreProductComponent},
  {path:"\Update",component:UpdateProductComponent},
  {path:"\Delete",component:DeleteProductComponent},
  {path:"\Requests",component:ViewRequestsComponent},
  {path:"\AddEmp",component:AddEmployeeComponent},
  {path:"\DelEmp",component:DeleteEmployeeComponent},
  {path:"\Login",component:AdminSigninComponent},
  {path:"",redirectTo:"\login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
