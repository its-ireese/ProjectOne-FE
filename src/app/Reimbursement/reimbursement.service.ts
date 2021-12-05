import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  //add URL later
  baseUrl = "http://localhost:9090/api/reimbursements";

  
  allPendingRequests: any;

  allRequests = [
    {
      reimId: 1,
      reimEmpId: 1,
      reimAmount: 50,
      reimStatus: false
    },
    {
    reimId: 2,
    reimEmpId: 2,
    reimAmount: 150,
    reimStatus: false
    }
  ]

  constructor(private http: HttpClient) { }

  //code methods
  getAllRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }
  addReimbursementService(newRequest: any){
    this.allRequests.push(newRequest);
  }

  // approveReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
  //   return this.http.put<Reimbursement>(this.baseUrl+"/approve/true", updateRequest);
  // }
  approveReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/approve/true", reimId);
  }

  // denyReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
  //   return this.http.put<Reimbursement>(this.baseUrl+"/approve/false", updateRequest);
  // }

  denyReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/approve/false", reimId );
  }
}
