import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  joke;
  constructor(private service:JokesService) { }

  ngOnInit() {
    this.getAnimalJoke();
  }

  getAnimalJoke(){
    this.service.moneyJoke().pipe().subscribe(this.getAnimalJokeCB)
  }
  getAnimalJokeCB=(dt)=>{
    this.joke=dt;
    console.log(this.joke)
  }



}
