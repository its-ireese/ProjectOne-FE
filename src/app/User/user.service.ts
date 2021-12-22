import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:9090/api/users";
  updateUrl = "http://localhost:9090/api/user/profile/update";
  

  constructor(private http: HttpClient) { }

  // validatedUser(user: User){
  //   if((user.userName= "vhawk") && (user.userPassword == "static")){
  //     user.userType = "manager";
  //   }else if((user.userName = "vstone") && (user.userPassword == "cyborg")){
  //     user.userType = "manager";
  //   }else if((user.userName = "acurry") && (user.userPassword == "aquaman")){
  //     user.userType = "employee";
  //   }else if((user.userName = "ballan") && (user.userPassword == "flash")){
  //     user.userType = "employee";
  //   }else if((user.userName = "dprince") && (user.userPassword == "wonder")){
  //     user.userType = "employee";
  //   }
  // return user;
  // }

  validateUser(user: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, user);
  }
  validatedUserService(userName: string, userPassword: string): Observable<User>{
    return this.http.get<User>(this.baseUrl+"/login/"+userName+"/"+userPassword);
  }
  
  getUserInfo(userId: number): Observable<User> {
    return this.http.get<User>(this.baseUrl+"/"+userId);
  }

  updateInfoService(updateInfo: User): Observable<User>{
    return this.http.put<User>(this.updateUrl, updateInfo);
  }

}
