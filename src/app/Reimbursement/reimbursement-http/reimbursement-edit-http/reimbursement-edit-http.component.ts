import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReimbursementHttpService } from '../reimbursement-http.service';
import { Reimbursement } from '../reimbursement.model';

@Component({
  selector: 'app-reimbursement-edit-http',
  templateUrl: './reimbursement-edit-http.component.html',
  styleUrls: ['./reimbursement-edit-http.component.css']
})
export class ReimbursementEditHttpComponent implements OnInit {

  updateRequest: Reimbursement = {
    reimId: 0,
    reimEmpId: 0,
	  reimAmount: 0,
	  reimStatus: false,
	  reimApproved: false
  }
  constructor(private reimbursementService: ReimbursementHttpService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var receivedReimId: any = this.activatedRoute.snapshot.paramMap.get("sentReimId");
    console.log(receivedReimId);
    this.reimbursementService.getAReimbursementService(receivedReimId).subscribe(
      (response) => {
        this.updateRequest = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editRequest2(){
    this.reimbursementService.updateReimbursementService(this.updateRequest).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['reimbursement-info-http']);
      },
      (error) => {
        console.log(error);
      } );
  }
  editRequest(){
    this.reimbursementService.updateReimbursementService(this.updateRequest).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      } );
  }

  logAmountChange(bAmount: any){
    console.log("Amount template variable: ");
    console.log(bAmount);
  }

}



