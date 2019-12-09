import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {

 
  joke;
  constructor(private service:JokesService) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.service.celebrityJoke().pipe().subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }

}
