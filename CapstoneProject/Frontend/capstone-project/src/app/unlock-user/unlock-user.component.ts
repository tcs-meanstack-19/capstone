import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  updateMsg?:string;
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }

  unlockUser(userRef:any){
    console.log(userRef);
    this.employeeSer.unlockUserStatus(userRef).subscribe((result:string)=>{
      this.updateMsg=result;
    });
  }

}
