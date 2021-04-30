import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-capstone';
  constructor(public authService:UserService){}

  ngOnInit() {
  }

  // logout() {
  //   if(this.adminAuthService.isAdminLoggedIn()){
  //     this.adminAuthService.adminLogout();
  //   }else if(this.employeeAuthService.isEmployeeLoggedIn()){
  //     this.employeeAuthService.employeeLogOut();
  //   }else if(this.userAuthService.isUserLoggedIn()){
  //     this.userAuthService.userLogOut();
  //   }
  // }

  
  logout() {
    if(this.authService.isLoggedIn()){
      this.authService.userLogOut();
    }
  }
}
