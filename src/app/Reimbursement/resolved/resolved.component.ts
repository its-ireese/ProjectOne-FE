import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReimbursementHttpService } from '../reimbursement-http/reimbursement-http.service';
import { Reimbursement } from '../reimbursement-http/reimbursement.model';
import { ResolvedService } from './resolved.service';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {

  flag: boolean = false;
  
  filterKey = 0;

  allRequests: Reimbursement[] = [];

  errorMsg: string = '';

  newRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }
  
  constructor(private resolvedService: ResolvedService, private reimbursementHttpService: ReimbursementHttpService , private router: Router) { }

  ngOnInit(): void {
    this.loadResolvedRequest();
  }

  loadResolvedRequest(){
    this.resolvedService.getAllResolvedRequestService().subscribe(
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

  filterResolvedRequests(reimEmpId: number) {
    this.reimbursementHttpService.getResolvedFilterReimbursementService(reimEmpId).subscribe(
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
    this.filterResolvedRequests(this.filterKey);
  }
  resetFilter() {
    this.loadResolvedRequest();
  }
  
}
