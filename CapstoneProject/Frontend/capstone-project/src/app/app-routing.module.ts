import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { RetrieveProductComponent } from './components/retrieve-product/retrieve-product.component';
import { StoreProductComponent } from './components/store-product/store-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { ViewRequestsComponent } from './components/view-requests/view-requests.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { ShowProductComponent } from './components/show-product/show-product.component';


const routes: Routes = [
  {path:"\Retrieve",component:RetrieveProductComponent},
  {path:"\Store",component:StoreProductComponent},
  {path:"\Update",component:UpdateProductComponent},
  {path:"\Delete",component:DeleteProductComponent},
  {path:"\Requests",component:ViewRequestsComponent},
  {path:"\AddEmp",component:AddEmployeeComponent},
  {path:"\DelEmp",component:DeleteEmployeeComponent},
 // {path:"\Logout",component:LogoutComponent},
  {path:"",redirectTo:"\login", pathMatch:"full"},
  {path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'signin', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    {
        path: 'shop-product', component: ShowProductComponent, canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/signin', pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
