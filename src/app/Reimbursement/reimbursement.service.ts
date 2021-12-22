import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  baseUrl = "http://localhost:9090/api/reimbursements";

  
  allPendingRequests: any;

  allRequests = [
    {
      reimId: 0,
      reimEmpId: 0,
      reimAmount: 0,
      reimStatus: false,
      reimAprrove: false
    }
    // {
    // reimId: 2,
    // reimEmpId: 2,
    // reimAmount: 150,
    // reimStatus: false
    // }
  ]

  constructor(private http: HttpClient) { }

  //code methods
  getAllRequests(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }
  getuserReimburseService(userId: number): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl+"/"+userId);
  }
  // addReimbursementService(newRequest: any){
  //   this.allRequests.push(newRequest);
  // }

  // approveReimbursementService(reimId: number): Observable<Reimbursement>{
  //   return this.http.put<Reimbursement>(this.baseUrl+"/approve/true", reimId);
  // }

  // denyReimbursementService(reimId: number): Observable<Reimbursement>{
  //   return this.http.put<Reimbursement>(this.baseUrl+"/approve/false", reimId );
  // }
}
