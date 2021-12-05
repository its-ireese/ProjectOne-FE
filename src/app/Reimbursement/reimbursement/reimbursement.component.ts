import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/User/auth.service';
import { Reimbursement } from '../reimbursement.model';
import { ReimbursementService } from '../reimbursement.service';


@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {
  
  flag: boolean =false;

  newRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
    reimAmount: 0,
    reimStatus: false,
    reimApproved: false
  }
  allRequests: any;

  constructor(private reimbursementService: ReimbursementService, private authService: AuthService, private router: Router) {
   }

  ngOnInit(): void {
    this.allRequests = this.reimbursementService.getAllRequests();
  }
  getAllRequests(): any {
    throw new Error('Method not implemented.');
  }

  toggleAdd(){
    if(this.flag){
      this.flag = false;
    }else {
      this.flag = true;
    }
  }

  addRequest(){
    var myRequest = {
      reimId: this.allRequests[this.allRequests.length-1].id +1, 
      reimEmpId: this.newRequest.reimEmpId,
      reimAmount: this.newRequest.reimAmount,
      reimStatus: this.newRequest.reimStatus,
      reimApproved: this.newRequest.reimApproved
    }

  }

  approveRequest(reimId: number){
    this.allRequests.forEach((value: any, index: string | number) => {
      if(this.allRequests[index].reimId == reimId){
        this.approveRequest(reimId);
      }
    });
  }

  deleteRquest(reimId: number) {
    this.allRequests.forEach((value: any, index: string | number) => {
      if(this.allRequests[index].reimId == reimId){
        this.allRequests.splice(index, 1);
      }
    });
  }
  

  denyRequest(reimId: number) {
    this.allRequests.forEach((value: any, index: string | number) => {
      if(this.allRequests[index].reimId == reimId){
        this.denyRequest(reimId);
      }
    });
  }
}
