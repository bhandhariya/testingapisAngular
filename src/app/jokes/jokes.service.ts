import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "node_modules/rxjs";

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http:HttpClient) { }

  public animalJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=animal');
  }
  public careerJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=career');
  }
  public celebrityJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=celebrity');
  }
  public devJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=dev');
  }
  public explicitJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=explicit');
  }
  public fashionJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=fashion');
  }
  public foodJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=food');
  }
  public historyJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=history');
  }
  public moneyJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=money');
  }
  public movieJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=movie');
  }
  public musicJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=music');
  }
  public politicalJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=political');
  }
  public religionJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=religion');
  }
  public scienceJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=science');
  }
  public sportJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=sport');
  }
  public travelJoke() : Observable<Response> {
    return this.http.get<Response>('https://api.chucknorris.io/jokes/random?category=travel');
  }


}
