import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement-http/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class PendingService {

  baseUrl= "http://localhost:9090/api/reimbursements/status/false";
  filterUrl= "http://localhost:9090/api/employee/";

  constructor(private http: HttpClient) { }

  getAllPendingRequestService(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }
  getPendingFilterReimbursementService(reimEmpId: Number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.filterUrl+ "/" +reimEmpId+ "/reimbursement/status/false");
  }
  
}
