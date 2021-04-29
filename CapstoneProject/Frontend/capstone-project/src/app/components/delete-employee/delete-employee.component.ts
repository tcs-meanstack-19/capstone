import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteMsg?:string
  constructor(public employeeSer: EmployeesService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log("id is "+id);
    this.employeeSer.deleteEmployeeById(id).subscribe((result:string)=> {
        this.deleteMsg=result;
    })
  }
}
