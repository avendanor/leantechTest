import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any[]; 
  tcode : string;
  constructor(http: Http) { 
    http.get('https://jsonplaceholder.typicode.com/users')  
    .subscribe(response => {  
      this.posts = response.json();
      console.log(typeof(this.posts));  
    });
    
  }
  filtrar() : void {
    console.log(this.tcode);
  }

  ngOnInit() {
    
  }
}
