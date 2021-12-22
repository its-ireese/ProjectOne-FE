import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zeamples',
  templateUrl: './zeamples.component.html',
  styleUrls: ['./zeamples.component.css']
})
export class ZeamplesComponent implements OnInit {
  message = "";
  flag = true;
  message2 = "";
  message3 = "";
   
  text1 = "";
  text2 = "";

  constructor() { }

  ngOnInit(): void {
  }

  display() {
    if(this.flag){
      this.message = "TESTING FEATURE !23";
      this.flag = false;
    }else{
      this.message = "";
      this.flag = true;
    }
    console.log("Display is working");

  }
  hover() {
    if(this.flag){
      this.message2 = "We have life!";
      this.flag = false;
    }else{
      this.message2 = "";
      this.flag = true;
    }
    console.log("Hover is working");
  }
  floating(){
    if(this.flag){
      this.message3 = "God is good all the time!";
      this.flag = false;
    }else{
      this.message3 = "";
      this.flag = true;
    }
    
    console.log("floating is working");
  }
  copy(){
    if(this.text1 != ""){
      this.text2 = this.text1;
    }else if(this.text2 != ""){
      this.text1 = this.text2;
    }
  }
  clear(){
    this.text1 = "";
    this.text2 = "";
  }



}
