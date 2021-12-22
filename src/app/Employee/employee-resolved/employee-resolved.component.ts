import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';
import { EmployeeResolvedService } from './employee-resolved.service';

@Component({
  selector: 'app-employee-resolved',
  templateUrl: './employee-resolved.component.html',
  styleUrls: ['./employee-resolved.component.css']
})
export class EmployeeResolvedComponent implements OnInit {

  flag: boolean = false;

  allRequests: Reimbursement[] = [];

  errorMsg: string = '';

  newRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }
  constructor(private employeeResolvedService: EmployeeResolvedService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmployeeResolvedRequests();
  }

  loadEmployeeResolvedRequests(){
    this.employeeResolvedService.getAllEmployeeResolvedRequestService(Number(sessionStorage.getItem("userId"))).subscribe(
      (response) => {
        console.log(response);
        this.allRequests = response;
      },
      (error) => {
        console.log(error);
        this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
      }
      );
  }
}
