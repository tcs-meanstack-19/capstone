import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  constructor(public empService:EmployeeService) { }

  ngOnInit(): void {
  }

  storeRequest(requestRef:any){
    console.log(requestRef);
    //passing requestRef value to angular service
    this.empService.sendRequest(requestRef);
    
  }
}
