import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming/programming.component';
import { DarkComponent } from './dark/dark.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesRoutingModule} from './jokes.routing';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { CelebrityComponent } from './celebrity/celebrity.component';
import { DevComponent } from './dev/dev.component';
import { ExplicitComponent } from './explicit/explicit.component';
import { FashionComponent } from './fashion/fashion.component';
import { FoodComponent } from './food/food.component';
import { HistoryComponent } from './history/history.component';
import { MoneyComponent } from './money/money.component';
import { MovieComponent } from './movie/movie.component';
import { MusicComponent } from './music/music.component';
import { PoliticalComponent } from './political/political.component';
import { ReligionComponent } from './religion/religion.component';
import { ScienceComponent } from './science/science.component';
import { TravelComponent } from './travel/travel.component';
import { SportComponent } from './sport/sport.component';
import { JokesService } from './jokes.service';
@NgModule({
  declarations: [ProgrammingComponent, DarkComponent, JokesComponent, CelebrityComponent, DevComponent, ExplicitComponent, FashionComponent, FoodComponent, HistoryComponent, MoneyComponent, MovieComponent, MusicComponent, PoliticalComponent, ReligionComponent, ScienceComponent, TravelComponent, SportComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[JokesService]
})
export class JokesModule { }
