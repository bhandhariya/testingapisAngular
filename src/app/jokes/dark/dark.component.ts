import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkComponent implements OnInit {

  joke;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.http.get('https://api.chucknorris.io/jokes/random?category=career').subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }


}
