import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/Reimbursement/reimbursement-http/reimbursement.model';
import { EmployeeReimbursementService } from './employee-reimbursement.service';

@Component({
  selector: 'app-employee-reimbursement',
  templateUrl: './employee-reimbursement.component.html',
  styleUrls: ['./employee-reimbursement.component.css']
})
export class EmployeeReimbursementComponent implements OnInit {

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
  updateRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  };
  
  constructor(private employeeReimbursementService: EmployeeReimbursementService, private router: Router) { }

  ngOnInit(): void {
    this.loadEmpRequests();
  }

   loadEmpRequests(){
     this.employeeReimbursementService.getAllEmployeeReimbursementsService(Number(this.newRequest.reimEmpId)).subscribe(
       (response) => {
         this.allRequests = response;
       },
       (error) => {
         console.log(error);
         this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
         console.log(this.errorMsg);
       }
       );
   }
  

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else {
      this.flag = true;
    }
  }

  addRequest() {
    this.employeeReimbursementService.addEmployeeReimbursementService(this.newRequest).subscribe(
      (response: any) => {
        console.log(response);
        this.loadEmpRequests();
      },
    (error: any) => {
      console.log(error);
      this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
    }
  )
}

removeRequest(reimId: number){
  this.employeeReimbursementService.removeEmployeeReimbursementService(reimId).subscribe(
    (response: any) => {
      console.log(response);
      this.loadEmpRequests();
    },
    (error: any) => {
      console.log(error);
      this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
    }
  )
}

editRequest(updateRequest: Reimbursement){
  this.employeeReimbursementService.updateEmployeeReimbursementService(this.updateRequest).subscribe(
    (response: Reimbursement) => {
      console.log(response);
      updateRequest = response;
    },
    (error: any) => {
      console.log(error);
    } );
}
  
}



