import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
  joke;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.http.get('https://api.chucknorris.io/jokes/random?category=animal').subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }

}
