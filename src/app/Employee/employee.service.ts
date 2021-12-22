import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/user.model';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  baseUrl = "http://localhost:9090/api/employee";
  updateUrl = "http://localhost:9090/api/user";
  
  constructor(private http: HttpClient) { }

  updateInfoService(updateInfo: User): Observable<User>{
    return this.http.put<User>(this.updateUrl + "/" + updateInfo.userId, updateInfo);
  }

  viewInfoService(userId: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl+"/"+userId);
  }
}
