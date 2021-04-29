import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http:HttpClient) { }
  //post method 1st param url and 2nd param json data
  sendRequest(requestRef:any){ //pass sendRequest() inside store-request.ts
    this.http.post("http://localhost:9090/employee/sendRequest",requestRef).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}
