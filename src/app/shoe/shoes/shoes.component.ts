import { Component, OnInit } from '@angular/core';
import { Shoe } from '../shoe.model';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  allShoes: Shoe[] = [
    {
      "shoeId": 1,
      "shoeName": "Jordan 11 Retro Bred",
      "shoeBrand": "Jordan",
      "shoeCost": 350,
      "shoeAvailable": true
  },
  {
      "shoeId": 2,
      "shoeName": "Jordan 12 Retro Royalty Taxi",
      "shoeBrand": "Jordan",
      "shoeCost": 260,
      "shoeAvailable": true
  },
  {
      "shoeId": 3,
      "shoeName": "Jordan 8 Retro Aqua",
      "shoeBrand": "Jordan",
      "shoeCost": 260,
      "shoeAvailable": true
  },
  {
      "shoeId": 4,
      "shoeName": "Jordan 10 Steel",
      "shoeBrand": "Jordan",
      "shoeCost": 500,
      "shoeAvailable": true
  },
  {
      "shoeId": 5,
      "shoeName": "Jordan 3 Black Cements",
      "shoeBrand": "Jordan",
      "shoeCost": 450,
      "shoeAvailable": true
  },
  {
      "shoeId": 6,
      "shoeName": "Jordan 11 Bread 2001",
      "shoeBrand": "Jordan",
      "shoeCost": 500,
      "shoeAvailable": true
  },
  {
      "shoeId": 7,
      "shoeName": "Yeezy Slide Pure",
      "shoeBrand": "Adidas",
      "shoeCost": 240,
      "shoeAvailable": true
  },
  {
      "shoeId": 8,
      "shoeName": "Yeezy Boost 350 V2 Black/Red",
      "shoeBrand": "Adidas",
      "shoeCost": 420,
      "shoeAvailable": true
  },
  {
      "shoeId": 9,
      "shoeName": "Yeezy Boost 700 Wave Runner Solid Grey",
      "shoeBrand": "Adidas",
      "shoeCost": 415,
      "shoeAvailable": true
  },
  {
      "shoeId": 10,
      "shoeName": "Ultra Boost 21 Triple Black",
      "shoeBrand": "Adidas",
      "shoeCost": 100,
      "shoeAvailable": true
  },
  {
      "shoeId": 11,
      "shoeName": "Nike Dunk Low Retro White Black",
      "shoeBrand": "Nike",
      "shoeCost": 280,
      "shoeAvailable": true
  },
  {
      "shoeId": 12,
      "shoeName": "Nike Air Force 1 Low Travis Scott Sail",
      "shoeBrand": "Nike",
      "shoeCost": 1400,
      "shoeAvailable": true
  },
  {
      "shoeId": 13,
      "shoeName": "Nike Air Fear of God 1 Triple Black",
      "shoeBrand": "Nike",
      "shoeCost": 510,
      "shoeAvailable": true
  },
  {
      "shoeId": 14,
      "shoeName": "Nike SB Dunk Low Travis Scott",
      "shoeBrand": "Nike",
      "shoeCost": 2200,
      "shoeAvailable": true
  },
  {
      "shoeId": 15,
      "shoeName": "Nike Dunk Low Off-White Lot 1",
      "shoeBrand": "Nike",
      "shoeCost": 1500,
      "shoeAvailable": true
  },
  {
      "shoeId": 16,
      "shoeName": "Crocs Classic Clog KFC",
      "shoeBrand": "Crocs",
      "shoeCost": 700,
      "shoeAvailable": true
  },
  {
      "shoeId": 17,
      "shoeName": "Crocs Classic Clog Black",
      "shoeBrand": "Crocs",
      "shoeCost": 55,
      "shoeAvailable": true
  },
  {
      "shoeId": 18,
      "shoeName": "A Bathing Ape Bape STA Low Shark Black",
      "shoeBrand": "A Bathing Ape",
      "shoeCost": 680,
      "shoeAvailable": true
  },
  {
      "shoeId": 19,
      "shoeName": "Gucci Rubber Slides Red Green",
      "shoeBrand": "Gucci",
      "shoeCost": 290,
      "shoeAvailable": true
  },
  {
      "shoeId": 20,
      "shoeName": "Gucci Rubber Slides White",
      "shoeBrand": "Gucci",
      "shoeCost": 310,
      "shoeAvailable": true
  },
  {
      "shoeId": 21,
      "shoeName": "Louis Vuitton Trainer Red Mesh",
      "shoeBrand": "Louis Vuitton",
      "shoeCost": 1600,
      "shoeAvailable": true
  },
  {
      "shoeId": 22,
      "shoeName": "Louis Vuitton Trainer Monogram Purple",
      "shoeBrand": "Louis Vuitton",
      "shoeCost": 1250,
      "shoeAvailable": true
  },
  {
      "shoeId": 24,
      "shoeName": "Prada Cloudbust Thunder High-Tech Sneakers",
      "shoeBrand": "Prada",
      "shoeCost": 990,
      "shoeAvailable": true
  },
  {
      "shoeId": 25,
      "shoeName": "Prada Rubber Knit Sneakers",
      "shoeBrand": "Prada",
      "shoeCost": 1000,
      "shoeAvailable": true
  },
  {
      "shoeId": 27,
      "shoeName": "Alexander McQueen Oversized Black",
      "shoeBrand": "Alexander McQueen",
      "shoeCost": 550,
      "shoeAvailable": true
  },
  {
      "shoeId": 28,
      "shoeName": "Balenciaga Speed Trainer Black",
      "shoeBrand": "Balenciaga",
      "shoeCost": 550,
      "shoeAvailable": true
  },
  {
      "shoeId": 29,
      "shoeName": "Balenciaga Triple S Sneakers",
      "shoeBrand": "Balenciaga",
      "shoeCost": 730,
      "shoeAvailable": true
  },
  {
      "shoeId": 30,
      "shoeName": "Balenciaga Women Clog Logo Heels Black",
      "shoeBrand": "Balenciaga",
      "shoeCost": 600,
      "shoeAvailable": true
  },
  {
      "shoeId": 26,
      "shoeName": "Alexander McQueen Oversized Ivory Black",
      "shoeBrand": "Alexander McQueen",
      "shoeCost": 450,
      "shoeAvailable": true
  },
  {
      "shoeId": 23,
      "shoeName": "Prada Americas Cup Orginal Sneakers",
      "shoeBrand": "Prada",
      "shoeCost": 750,
      "shoeAvailable": true
  },
  {
      "shoeId": 31,
      "shoeName": "Alexander McQueen Oversized Runner Black",
      "shoeBrand": "Alexander McQueen",
      "shoeCost": 620,
      "shoeAvailable": true
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getAllShoesService(): Shoe[]{
    return this.allShoes;
  }

  addShoeService(newShoe: Shoe): void{
    this.allShoes.push(newShoe);
  }

  removeShoeService(shoeId: number): void{
    this.allShoes.forEach((value, index) => {
      if(this.allShoes[index].shoeId == shoeId){
        this.allShoes.splice(index, 1);
      }
    })
  }

  getAShoeService(shoeId: number): Shoe{
    var sendShoe: Shoe = {
      shoeId: 0,
    shoeName: "",
    shoeBrand: "",
    shoeCost: 0,
    shoeAvailable: true
    };
    this.allShoes.forEach((value, index) => {
      if(this.allShoes[index].shoeId == shoeId){
        sendShoe = this.allShoes[index];
      }
    });
    return sendShoe;
  }

  updateShoeService(updateShoe: Shoe): void{
    this.allShoes.forEach((value, index) => {
      if(this.allShoes[index].shoeId == updateShoe.shoeId){
        this.allShoes[index] = updateShoe;
      }
    });
  }

}
