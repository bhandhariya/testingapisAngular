import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-dark',
  templateUrl: './dark.component.html',
  styleUrls: ['./dark.component.css']
})
export class DarkComponent implements OnInit {

  joke;
  constructor(private http:HttpClient,private service:JokesService) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.service.careerJoke().pipe().subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }


}
