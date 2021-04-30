import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeEmpPassComponent } from './change-emp-pass/change-emp-pass.component';
import { EmployeeMainPageComponent } from './employee-main-page/employee-main-page.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


const routes: Routes = [
  {path:"\employee", component:EmployeeMainPageComponent},
  {path:"\changeEmployeePassword", component:ChangeEmpPassComponent},
  {path:"\sendRequest", component:SendRequestComponent},
  {path:"\lockUser", component:UnlockUserComponent},
  {path:"\orderUpdate", component:UpdateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
