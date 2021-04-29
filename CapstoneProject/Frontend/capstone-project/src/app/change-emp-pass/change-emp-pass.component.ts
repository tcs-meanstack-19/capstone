import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-change-emp-pass',
  templateUrl: './change-emp-pass.component.html',
  styleUrls: ['./change-emp-pass.component.css']
})
export class ChangeEmpPassComponent implements OnInit {

  constructor(public employeeSer:EmployeeService) { }
  updateMsg?:string;
  ngOnInit(): void {
  }

  changePassword(empRef:any){
    console.log(empRef);
    this.employeeSer.changeEmployeePassword(empRef).subscribe((result:string)=>{
      this.updateMsg=result;
    });
  }

}
