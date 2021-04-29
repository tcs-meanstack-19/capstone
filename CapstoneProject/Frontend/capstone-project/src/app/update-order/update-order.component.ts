import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Order } from '../model.order';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent implements OnInit {

  orders?:Array<Order>
  updateMsg?:string;
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
    
  }

  showOrders(){
    this.employeeSer.retrieveAllOrders().subscribe(result=>this.orders=result);
  }
  updateStatus(orderRef:any){
    console.log(orderRef);
    this.employeeSer.updateOrderStatus(orderRef).subscribe((result:string)=>{
      this.updateMsg=result;
    });
  }


}
