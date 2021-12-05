import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from './reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementHttpService {

  baseUrl = "http://localhost:9090/api/reimbursements";

  constructor(private http: HttpClient) { }

  getAllReimbursementsService(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }

  addReimbursementService(newRequest: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.baseUrl, newRequest);
  }

  removeReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.baseUrl+"/"+reimId);
  }

  getAReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.get<Reimbursement>(this.baseUrl+"/"+reimId);
  }

  updateReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/"+updateRequest.reimId, updateRequest);
  }

  getAllPendingReimbursementService(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/status/false");
  }

  getAllResolvedReimbursementService(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+"/status/true");
  }

  approveReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/approve/true", updateRequest);
  }

  denyReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/approve/false", updateRequest);
  }
  
 
  
}
