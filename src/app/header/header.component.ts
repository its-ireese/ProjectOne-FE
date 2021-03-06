import { Component, OnInit } from '@angular/core';
import { AuthService } from '../User/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn;
  }

   retrieveUserType(){
     return this.authService.retrieveUserType();
   }

  // retrieveUser(){
  //   return this.authService.retrieverUser
  // }

  isEmployee() {
    let level= sessionStorage.getItem("userType");
    return (level=="employee");
  }

  isManager() {
    let level= sessionStorage.getItem("userType");
    return (level=="manager");
  }

}
