import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Employee/employee.service';
import { User } from 'src/app/User/user.model';
import { UserService } from 'src/app/User/user.service';

@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent implements OnInit {

  errorMsg = ""; 
  editFlag = false;
  
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
    userId: Number(sessionStorage.getItem("userId")),
    userName: '',
    userPassword: '',
    userType: '',
    userFirstName: '',
    userLastName: '',
    userAddress: '',
    userContact: '',
    userRemoved: false
  }

  constructor(private userService: UserService, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getuserInfo();
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
    this.employeeService.updateInfoService(this.editUser).subscribe(
      (response) => {
        //console.log(response);
        //this.editUser = response;
        //console.log(this.editUser);
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

}
