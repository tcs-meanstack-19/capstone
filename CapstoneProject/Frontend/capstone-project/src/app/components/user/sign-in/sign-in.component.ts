import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public  userService: UserService,private router : Router) { }

  model = {
    username:'',
    password:''
  }
  serverErrorMessages: string;
  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.userService.signin(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/shop-product');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }


}
