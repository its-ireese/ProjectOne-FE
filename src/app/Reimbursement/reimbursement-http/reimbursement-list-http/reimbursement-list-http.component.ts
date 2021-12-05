import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../reimbursement-http.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-reimbursement-list-http',
  templateUrl: './reimbursement-list-http.component.html',
  styleUrls: ['./reimbursement-list-http.component.css']
})
export class ReimbursementListHttpComponent implements OnInit {

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
  constructor(private reimbursementHttpService: ReimbursementHttpService, private router: Router) { }

  ngOnInit(): void {
    this.loadRequests();
    
  }

  loadRequests(){
    this.reimbursementHttpService.getAllReimbursementsService().subscribe(
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

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else {
      this.flag = true;
    }
  }

  addRequest() {
    this.reimbursementHttpService.addReimbursementService(this.newRequest).subscribe(
      (response) => {
        console.log(response);
        this.loadRequests();
      },
    (error) => {
      console.log(error);
      this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
    }
  )
}

removeRequest(reimId: number){
  this.reimbursementHttpService.removeReimbursementService(reimId).subscribe(
    (response) => {
      console.log(response);
      this.loadRequests();
    },
    (error) => {
      console.log(error);
      this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
        console.log(this.errorMsg);
    }
  )
}

approveRequest(updateRequest: Reimbursement){
  this.reimbursementHttpService.approveReimbursementService(updateRequest).subscribe(
  (response) => {
    console.log(response);
    this.loadRequests();
  },
  (error) => {
    console.log(error);
    this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
      console.log(this.errorMsg);
  }
)
}
denyRequest(updateRequest: Reimbursement){
  this.reimbursementHttpService.denyReimbursementService(updateRequest).subscribe(
  (response) => {
    console.log(response);
    this.loadRequests();
  },
  (error) => {
    console.log(error);
    this.errorMsg = 'There was some internal error! Try again later! Please and thank you.';
      console.log(this.errorMsg);
  }
)
}

goToEditComponent(reimId: any){
  console.log("logged: "+ reimId);
  this.router.navigate(['reimbursement-update-http', reimId])
}
}

