import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  retrieveUserEmployeeType() {
    throw new Error('Method not implemented.');
  }

  isLoggedIn: boolean = false;

  storeUser(user: User) {
    sessionStorage.setItem("userData", JSON.stringify(user));
  }

  retrieverUser(): User{
    var data: any = sessionStorage.getItem("userData");
    return JSON.parse(data == null?'':data);
  }

  removedUser(){
    sessionStorage.removeItem("userData");
  }

  retrieveUserType(){
    var data: any = sessionStorage.getItem("userData");
    var user: User = JSON.parse(data ==null?'':data);
    return user.userType;
  }
  constructor() { }
}
