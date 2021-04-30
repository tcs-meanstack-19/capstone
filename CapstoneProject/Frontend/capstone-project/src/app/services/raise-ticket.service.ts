import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {

  constructor(private http:HttpClient) { }

  raiseTicket(raiseTicketRef:any){
    return this.http.post("http://localhost:9090/user/raiseTicket", raiseTicketRef);
  }
}
