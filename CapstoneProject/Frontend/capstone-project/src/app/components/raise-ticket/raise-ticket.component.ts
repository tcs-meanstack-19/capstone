import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RaiseTicketService } from 'src/app/services/raise-ticket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  raiseTicketRef = new FormGroup({
    userName:new FormControl(),
    msg:new FormControl()
  });

  changedData?:any;

  constructor(private raiseTicketService:RaiseTicketService, private toaster:ToastrService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  sendRaisedTicket(){
    this.raiseTicketService.raiseTicket(this.raiseTicketRef.value).subscribe(result=>{
      this.changedData=result;
      if(this.changedData.success){
        this.toaster.success(this.changedData.msg, 'Success', {
          timeOut: 3000,
        });
      }else{
        this.toaster.error(this.changedData.msg, 'Error', {
          timeOut: 3000,
        });
      }
    })
  }

}
