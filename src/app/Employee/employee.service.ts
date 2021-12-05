import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  baseUrl = "http://localhost:9090/api/employees";
  updateUrl = "http://localhost:9090/api/employees/profile/update";
  
  constructor(private http: HttpClient) { }

  updateInfoService(updateInfo: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.updateUrl+"/"+updateInfo.empId, updateInfo);
  }

  viewInfoService(empId: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"/"+empId);
  }
}
