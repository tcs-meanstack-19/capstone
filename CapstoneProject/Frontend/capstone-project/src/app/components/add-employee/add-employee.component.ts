import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  addMsg?:string
  constructor(public employeeSer: EmployeesService) { }

  ngOnInit(): void {
  }

  addEmployee(employeeRef:any){
    console.log(employeeRef);
    this.employeeSer.addEmployeeDetailsInfo(employeeRef);
    this.addMsg = "Data Stored";
  }
}
