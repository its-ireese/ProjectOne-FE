import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolvedService {

  baseUrl= "http://localhost:9090/api/employee/";
  //API baseUrl= "http://localhost:9090/api/employee/{emp}/reimbursement/status/true";
 
  constructor(private http: HttpClient) { }

  getAllEmployeeResolvedRequestService(currentId: Number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl+ currentId + "/reimbursement/status/true" );
  }
}
