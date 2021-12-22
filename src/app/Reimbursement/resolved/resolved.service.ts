import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from '../reimbursement-http/reimbursement.model';


@Injectable({
  providedIn: 'root'
})
export class ResolvedService {

  baseUrl= "http://localhost:9090/api/reimbursements/status/true";
  filterUrl= "http://localhost:9090/api/employee/";

  constructor(private http: HttpClient) { }

  getAllResolvedRequestService(): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl);
  }

  getResolvedFilterReimbursementService(reimEmpId: Number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.filterUrl+ reimEmpId + "/reimbursement/status/true" );
  }
 
}
