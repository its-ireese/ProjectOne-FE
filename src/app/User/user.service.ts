import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:9090/api/users";

  constructor(private http: HttpClient) { }

  validatedUser(user: User){
    if((user.userName= "vhawk") && (user.userPassword == "static")){
      user.userType = "manager";
    }else if((user.userName = "vstone") && (user.userPassword == "cyborg")){
      user.userType = "manager";
    }else if((user.userName = "acurry") && (user.userPassword == "aquaman")){
      user.userType = "employee";
    }else if((user.userName = "ballan") && (user.userPassword == "flash")){
      user.userType = "employee";
    }else if((user.userName = "dprince") && (user.userPassword == "wonder")){
      user.userType = "employee";
    }
  return user;
  }


  validatedUserService(checkUser: User): Observable<User>{
    return this.http.post<User>(this.baseUrl, checkUser);
  }

}
