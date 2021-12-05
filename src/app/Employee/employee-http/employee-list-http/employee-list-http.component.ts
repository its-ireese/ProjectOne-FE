import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list-http',
  templateUrl: './employee-list-http.component.html',
  styleUrls: ['./employee-list-http.component.css']
})
export class EmployeeListHttpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
