import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { UserService } from '../../../services/user.service'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  generateUsername: string;

  constructor(public  userService: UserService) { }

  ngOnInit() {
  }

 

  onSubmit(form: NgForm) {
    
    this.userService.postUser(form.value).subscribe(
      res => {
        console.log("received response ===>",res)
        this.showSucessMessage = true;
        this.generateUsername = res['userName'];
        setTimeout(() => this.showSucessMessage = false, 100000);
        this.resetForm(form);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dob: '',
      phoneno: '',
      address: '',
      status:false
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
