import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeePendingService {

  baseUrl= "http://localhost:9090/api/employee/";
  actionUrl = "http://localhost:9090/api/reimbursements";

  constructor(private http: HttpClient) { }

  getAllEmployeePendingRequestService(currentId: Number): Observable<Reimbursement[]>{
    return this.http.get<Reimbursement[]>(this.baseUrl +currentId+ "/reimbursement/status/false" );
  }
  removeEmployeeReimbursementService(reimId: number): Observable<Reimbursement>{
    return this.http.delete<Reimbursement>(this.actionUrl+"/"+reimId);
  }

  addEmployeeReimbursementService(newRequest: Reimbursement): Observable<Reimbursement> {
    console.log(newRequest.reimEmpId);
    return this.http.post<Reimbursement>(this.actionUrl, {
      "reimEmpId": newRequest.reimEmpId,
      "reimAmount": newRequest.reimAmount,
      "reimStatus": newRequest.reimStatus,
      "reimApproved": newRequest.reimApproved

    });
  }

  updateEmployeeReimbursementService(currentRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.actionUrl+ "/update", currentRequest);
  }

  editEmployeeReimbursementService(updateRequest: Reimbursement): Observable<Reimbursement>{
    return this.http.put<Reimbursement>(this.actionUrl + "/" + updateRequest.reimId + "/update", updateRequest);
  }
  
}
