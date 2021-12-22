import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: User[] = [];

  userObj: User = new User();
  errorUsermsg: string = "";

  newUser: User = {
    userId: 0,
    userName: '',
    userPassword: '',
    userType: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userContact: '',
    userRemoved: false
  }

  currentUser: User = {
    userId: 0,
    userName: '',
    userPassword: '',
    userType: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userContact: '',
    userRemoved: false
  }
  editUser: User = {
    userId: 0,
    userName: '',
    userPassword: '',
    userType: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userContact: '',
    userRemoved: false
  }

  editFlag = false;
  errorMsg = "";

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.loadUser();
    // this.validatedUser();
  }

  getuserInfo() {
    this.userService.getUserInfo(Number(sessionStorage.getItem("userId"))).subscribe(
      (response) => {
        this.currentUser = response;
        // this.editUser = this.currentUser;
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.errorMsg = "ERROR GETTING THE USER INFO";
      }

    );
  }

  editUserInfo() {
    this.userService.updateInfoService(this.editUser).subscribe(
      (response) => {
        console.log(response);
        this.getuserInfo();
      
      },
      (error) => {
        console.log(error);
      }
    );

  }

  toggleEdit() {
    if(this.editFlag) this.editFlag=false;
    else this.editFlag=true;
  }
//   loadUser() {
//     this.userservice.validatedUserService({ userName: this.newUser, userPassword: this.newUser}).subscribe(
//       (response) => {
//         console.log("IM TESTING"); 
//         console.log(response); 
//       },
//       (error) => {
//         this.errorUsermsg = "Unable to reterive user. Try again later!";
//         console.log(this.errorUsermsg);
//       });
// }

// validatedUser() {
//   this.userservice.validatedUserService({ userName: this.userObj }).subscribe(
//     (response) => {
//       console.log("IM TESTING"); 
//       console.log(response); 
//     },
//     (error) => {
//       this.errorUsermsg = "Unable to reterive user. Try again later!";
//       console.log(this.errorUsermsg);
//     });
// }

}
