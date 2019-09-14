import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[];
  characters = [
    ['Friday 10th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","250 USD"],
    ['Satuday 11th 8:28am',"Houston, TX, 33619","Atlanta, GA, 30123","150 USD"],
    ['Saturday 11th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","250 USD"],
    ['Sunday 12th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","280 USD"],
    ['Monday 13th 10:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","130 USD"],
    ['Monday 13th 2:28pm',"Houston, TX, 33619","Atlanta, GA, 30123","150 USD"]
  ] 
  tcode : string;
  constructor(http: Http) { 
    //intento de traer la info desde un json
    http.get('https://jsonplaceholder.typicode.com/users')  
    .subscribe(response => {  
      this.posts = response.json();
    });
  }
  filtrar() : void {
    console.log(this.tcode);
  }

  ngOnInit() {
    
  }
}
