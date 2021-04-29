import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requests } from '../models/model.requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(public http: HttpClient) { }

  viewRequests():Observable<Requests[]>{
    return this.http.get<Requests[]>("http://localhost:9090/Requests/viewRequests")
  }
}
