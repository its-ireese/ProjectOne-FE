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
  userName= "";
  userPassword= "";
  errorMsg= "";
 
  
  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.userService.validateUser(this.newUser).subscribe(
      (response) => {
        // console.log("The login button works");
        console.log(response);
        sessionStorage.setItem('userId', ""+response.userId);
        sessionStorage.setItem('userLevel', response.userType);
        sessionStorage.setItem('userFirst', response.userFirstName);
        sessionStorage.setItem('userLast', response.userLastName);
        sessionStorage.setItem('userAddress', response.userAddress);
        sessionStorage.setItem('userName', response.userName);
        sessionStorage.setItem('userPassword', response.userPassword);
        sessionStorage.setItem('userContact', response.userContact);
        this.authService.isLoggedIn = true;
        //response = this.newUser;
        if(response.userType !=""){
        this.authService.storeUser(response);
        }
        if(response.userType == "manager"){
          this.router.navigate(['managerHome']);
        }else if(response.userType == "employee"){
          this.router.navigate(['employeeHome']);
        }
        //  if(response.userType = "manager"){
        // // this.authService.isLoggedIn = true;
        // // this.authService.storeUser(response)
        // this.router.navigate(['managerHome']);
        // }else if (response.userType = "employee"){
        //   // this.authService.isLoggedIn = true; 
        //   // this.authService.storeUser(response)
        //   this.router.navigate(['employeeHome']);
        //  }
      },

      (error) => {
        console.log(error);
        this.errorMsg= "ERROR!";
        console.log(this.errorMsg);
        alert("FAILED LOGIN");
      }
    );
    
  }

  // validateLogin(){
  // var validateUser: User = this.userService.validatedUser(this.newUser);
  // if(validateUser.userType != "") {
  //   this.authService.storeUser(validateUser);
  //   this.authService.isLoggedIn = true;
  // }
  // if(validateUser.userType == "employee") {
  //   this.router.navigate(['employeeHome']);
  // } else if(validateUser.userType == "manager"){
  //   this.router.navigate(['managerHome']);
  // }
  //   }

  performLogin() {
       this.userService.validatedUserService(this.userName, this.userPassword).subscribe(
         (response) => {
           console.log(response);
           this.authService.storeUser(response);
           sessionStorage.setItem('userId', "" +response.userId);
          sessionStorage.setItem('userName', response.userName);
          sessionStorage.setItem('userPassword', response.userPassword);
          sessionStorage.setItem('userLevel', response.userType);
          sessionStorage.setItem('userFirst', response.userFirstName);
          sessionStorage.setItem('userLast', response.userLastName);
          sessionStorage.setItem('userAddress', response.userAddress);
          sessionStorage.setItem('userContact', response.userContact);
          this.authService.isLoggedIn = true;
          
         },
         (error) => {
             console.log(error);
             this.errorMsg= "ERROR!";
             console.log(this.errorMsg);
         }
       );
    
    }

}

