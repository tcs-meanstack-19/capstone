import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendRequestComponent } from './send-request/send-request.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ChangeEmpPassComponent } from './change-emp-pass/change-emp-pass.component';
import { EmployeeMainPageComponent } from './employee-main-page/employee-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SendRequestComponent,
    UpdateOrderComponent,
    UnlockUserComponent,
    ChangeEmpPassComponent,
    EmployeeMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
