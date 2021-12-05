import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-http',
  templateUrl: './manager-http.component.html',
  styleUrls: ['./manager-http.component.css']
})
export class ManagerHttpComponent implements OnInit {

  baseUrl = "http://localhost:9090/api/manager";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
