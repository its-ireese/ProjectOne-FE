import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Shoe } from '../shoe.model';
import { ShoesHttpService } from '../shoes-http.service';

@Component({
  selector: 'app-shoes-http',
  templateUrl: './shoes-http.component.html',
  styleUrls: ['./shoes-http.component.css']
})
export class ShoesHttpComponent implements OnInit {

  
  constructor(private http: HttpClient, private router: Router, private shoeshttpservice:ShoesHttpService ) { }

  allShoes: Shoe[] = [];
  
  shoeObj: Shoe = new Shoe();
  errorShoemsg: string = "";

  newShoeModel: Shoe = {
    shoeId: 0,
    shoeName: '',
    shoeBrand:'',
    shoeCost: 0,
    shoeAvailable: true
  }

  ngOnInit(): void {
    this.loadAllShoes();
  }

  loadAllShoes() {
this.shoeshttpservice.getAllShoesService().subscribe(
  (response) => {
   // console.log("IM TESTING"); 
    console.log(response);
    this.allShoes = response;
  },
  (error) => {
    console.log(error)
    this.errorShoemsg = "Unable to reterive shoes. Try again later!";
    console.log(this.errorShoemsg);
  });

  }
  
}
