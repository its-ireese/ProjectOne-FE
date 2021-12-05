import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();
  // userName= "";
  // password= "";
  
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("The login button works");
  }

  validateLogin(){
  var validateUser: User = this.userService.validatedUser(this.newUser);
  if(validateUser.userType != "") {
    this.authService.storeUser(validateUser);
    this.authService.isLoggedIn = true;
  }
  if(validateUser.userType == "employee") {
    this.router.navigate(['employeeHome']);
  } else if(validateUser.userType == "manager"){
    this.router.navigate(['managerHome']);
  }
    }
}

