import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor() { }

  storeUser(user: User) {
    // console.log("in auth service:");
    // console.log(user);
    // console.log(JSON.stringify(user));
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
    //  console.log(data);
     var user: User = JSON.parse(data ==null?'':data);
    //  console.log(user);
     return user.userType;
  // return data;
   }
  
}
