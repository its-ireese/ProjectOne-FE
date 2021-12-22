import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../User/user.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  baseUrl = "http://localhost:9090/api/manager";
  updateUrl = "http://localhost:9090/api/user/profile/update";

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  updateInfoService(updateInfo: User): Observable<User>{
    return this.http.put<User>(this.updateUrl, updateInfo);
  }
}
