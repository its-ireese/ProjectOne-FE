import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/User/user.model';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-manager-http',
  templateUrl: './manager-http.component.html',
  styleUrls: ['./manager-http.component.css']
})
export class ManagerHttpComponent implements OnInit {

  allEmployees: User[] = [];
  errorMsg: String = ''; 
  
  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.managerService.getAllEmployees().subscribe(
      (response) => {
        this.allEmployees = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
        this.errorMsg = 'There was an internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
      }
    )
  }
  
}
