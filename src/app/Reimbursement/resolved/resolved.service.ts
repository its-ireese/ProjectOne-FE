import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement-http/reimbursement.model';


@Injectable({
  providedIn: 'root'
})
export class ResolvedService {

  baseUrl= "http://localhost:9090/api/reimbursements/status/true";
 
  constructor(private http: HttpClient) { }

  getAllResolvedRequestService(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }
}
