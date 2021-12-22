import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeReimbursementService {

  baseUrl = "http://localhost:9090/api/reimbursements/employee";

  constructor(private http:HttpClient) { }

  getAllEmployeeReimbursementsService(reimEmpId: number): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>(this.baseUrl+"/"+reimEmpId);
  }

  removeEmployeeReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.baseUrl+"/"+reimId);
  }

  addEmployeeReimbursementService(newRequest: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>(this.baseUrl, newRequest);
  }

  updateEmployeeReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.baseUrl+"/"+updateRequest.reimId, updateRequest);
  }
}
