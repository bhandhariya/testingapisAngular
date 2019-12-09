import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokesService } from "../jokes.service";
@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {
  joke;
  constructor(private http:HttpClient,private jokeService:JokesService) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.jokeService.animalJoke().pipe().subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }

}
