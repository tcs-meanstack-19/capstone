import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  msg?:String;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  checkAdmin(loginRef:any) {
    console.log(loginRef);
    let user1 = loginRef.username;
    let pass1 = loginRef.password;
    if(user1 == "Admin" && pass1 == "admin123"){
      this.msg="Login Successful!"
      this.router.navigateByUrl('/Retrieve');
    }else {
      this.msg = "Login Failure. Try once again!";
    }
  }

}
