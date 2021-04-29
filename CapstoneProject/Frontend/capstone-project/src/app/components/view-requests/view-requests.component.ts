import { Component, OnInit } from '@angular/core';
import { Requests } from 'src/app/models/model.requests';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-view-requests',
  templateUrl: './view-requests.component.html',
  styleUrls: ['./view-requests.component.css']
})
export class ViewRequestsComponent implements OnInit {

  requests?:Array<Requests>
  constructor(public productSer: RequestsService) { }

  ngOnInit(): void {
    this.productSer.viewRequests().subscribe(result=> this.requests=result);
  }

}
