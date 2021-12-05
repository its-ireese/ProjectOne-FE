import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  emptyInfo: Employee = {
    empId: 0,
    empFirstName: "",
    empLastName: "",
    empAddress: "",
    empContact: "",
    empRemoved: false
  }
  
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
