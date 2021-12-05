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

  constructor(private http: HttpClient, private router: Router, private userservice: UserService) { }

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

  ngOnInit(): void {
    this.loadUser();
  }
  loadUser() {
    this.userservice.validatedUserService(this.newUser).subscribe(
      (response) => {
        console.log("IM TESTING"); 
        console.log(response); 
      },
      (error) => {
        this.errorUsermsg = "Unable to reterive user. Try again later!";
        console.log(this.errorUsermsg);
      });
}

}
