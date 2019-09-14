import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  characters = [
    ['Friday 10th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","250 USD","0"],
    ['Satuday 11th 8:28am',"Houston, TX, 33619","Atlanta, GA, 30123","150 USD","1"],
    ['Saturday 11th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","250 USD","2"],
    ['Sunday 12th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","280 USD","3"],
    ['Monday 13th 10:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","130 USD","4"],
    ['Monday 13th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","150 USD","5"]
  ]
  constructor() { }
  eliminar(num){
    var num2=this.characters.findIndex(x => x[4] === num)
    this.characters.splice(num2,1)
  }
  ngOnInit() {
  }

}
