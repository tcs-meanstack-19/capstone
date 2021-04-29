import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http:HttpClient) { }

  addEmployeeDetailsInfo(employeeRef:any){
    this.http.post("http://localhost:9090/Products/addEmployeeDetails",employeeRef,{responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

  deleteEmployeeById(id:any):any{
    return this.http.delete("http://localhost:9090/Products/deleteEmployeeById/"+id,{responseType:'text'});
  }
}
