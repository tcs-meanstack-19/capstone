import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { LockedUsers } from '../model.lockedusers';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  lockedusers?:Array<LockedUsers>
  updateMsg?:string; 
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
  }

  unlockUser(userRef:any){
    
    this.employeeSer.unlockUserStatus(userRef).subscribe((result:any)=>{
      this.updateMsg=result;
      console.log(userRef);
    });
  }

  showLockedUsers(){
    this.employeeSer.retrieveLockedUsers().subscribe(result=>this.lockedusers=result);
  }




}
