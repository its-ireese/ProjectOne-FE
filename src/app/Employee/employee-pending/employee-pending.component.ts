import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from 'src/app/Reimbursement/reimbursement-http/reimbursement-http.service';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';
import { AuthService } from 'src/app/User/auth.service';
import { EmployeePendingService } from './employee-pending.service';

@Component({
  selector: 'app-employee-pending',
  templateUrl: './employee-pending.component.html',
  styleUrls: ['./employee-pending.component.css']
})
export class EmployeePendingComponent implements OnInit {

  flag: boolean = false;

  allRequests: Reimbursement[] = [];

  errorMsg: string = '';

  newRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: Number(sessionStorage.getItem("userId")),
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }
  updateRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: Number(sessionStorage.getItem("userId")),
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }

  constructor(private employeePendingService: EmployeePendingService,private reimbursementHttpService: ReimbursementHttpService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.loadEmployeePendingRequests();
  }

  loadEmployeePendingRequests(){

    this.employeePendingService.getAllEmployeePendingRequestService(Number(sessionStorage.getItem("userId"))).subscribe(
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

  addRequest() {
    this.employeePendingService.addEmployeeReimbursementService(this.newRequest).subscribe(
      (response) => {
        this.newRequest.reimEmpId = Number(sessionStorage.getItem("userId"));
        console.log(response);
        this.router.navigate(['mypending']);
        this.loadEmployeePendingRequests();
      },
    (error: any) => {
      console.log(error);
      this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
    }
  )
  }
  removeRequest(reimId: number){
    this.employeePendingService.removeEmployeeReimbursementService(reimId).subscribe(
      (response) => {
        console.log(response);
        this.loadEmployeePendingRequests();
      },
      (error) => {
        console.log(error);
        this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
          console.log(this.errorMsg);
      }
    )
  }

  editRequest(updateRequest: Reimbursement){
    this.employeePendingService.updateEmployeeReimbursementService(updateRequest).subscribe(
      (response: Reimbursement) => {
        console.log(response);
        updateRequest = response;
        this.loadEmployeePendingRequests();
      },
      (error: any) => {
        console.log(error);
        this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
      } );
  }
  // updateARequest(updateRequest: Reimbursement){
    
  //   this.employeePendingService.editEmployeeReimbursementService(updateRequest).subscribe(
  //     (response: Reimbursement) => {
  //       console.log(response);

  //       updateRequest = response;
  //       this.loadEmployeePendingRequests();
  //     },
  //     (error: any) => {
  //       console.log(error);
  //       this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
  //       console.log(this.errorMsg);
  //     } );
  // }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else {
      this.flag = true;
    }
  }

}


