import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../reimbursement-http/reimbursement-http.service';
import { Reimbursement } from '../reimbursement.model';

import { PendingService } from './pending.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {

  flag: boolean = false;

  allRequests: Reimbursement[] = [];

  errorMsg: string = '';

  filterKey = 0;

  newRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }


  constructor(private pendingService: PendingService, private reimbursementHttpService: ReimbursementHttpService, private router: Router) { }

  ngOnInit(): void {
    this.loadPendingRequest();
  }

  loadPendingRequest(){
    this.pendingService.getAllPendingRequestService().subscribe(
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
  filterPendingRequests(reimEmpId: number) {
    this.reimbursementHttpService.getPendingFilterReimbursementService(reimEmpId).subscribe(
      (response) => {
        this.allRequests = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filter() {
    this.filterPendingRequests(this.filterKey);
  }

  resetFilter() {
    this.loadPendingRequest();
  }
}
