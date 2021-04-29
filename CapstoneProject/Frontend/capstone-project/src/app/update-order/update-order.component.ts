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
  constructor(public employeeSer:EmployeeService) { }

  ngOnInit(): void {
    this.employeeSer.retrieveAllOrders().subscribe(result=>this.orders=result);
  }

}
