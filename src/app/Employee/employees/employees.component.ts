import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/User/auth.service';
import { User } from 'src/app/User/user.model';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  empInfo: User[] = [];

  emptyInfo: User = {
    userId: 0,
    userFirstName: "",
    userLastName: "",
    userAddress: "",
    userContact: "",
    userRemoved: false,
    userName: '',
    userPassword: '',
    userType: ''
  }
  
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    var receivedEmployeeId: any = this.activatedRoute.snapshot.paramMap.get("sentEmployeeId");
    console.log(receivedEmployeeId);
    this.employeeService.viewInfoService(receivedEmployeeId).subscribe((response: any) => {
      this.emptyInfo = response;
    },
    (error: any) => {
      console.log(error);
    });
  }
  
  editInfo(){
    this.employeeService.updateInfoService(this.emptyInfo).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['employee-info']);
      },
      (error: any)=> {
        console.log(error);
      }
    );
  }
  
  }

