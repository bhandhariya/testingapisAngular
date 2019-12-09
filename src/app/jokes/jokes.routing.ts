import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingComponent } from './programming/programming.component';
import { DarkComponent } from './dark/dark.component';
import { JokesComponent } from './jokes/jokes.component';
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


const routes: Routes = [
    {
      path : '', component: JokesComponent, children : [
        {path: 'programming',
        component:ProgrammingComponent
        },
        {path: 'dark',
        component:DarkComponent
        },
        {path:'celebrity',component:CelebrityComponent},
        {path:'dev',component:DevComponent},
        {path:'explicit',component:ExplicitComponent},
        {path:'fashion',component:FashionComponent},
        {path:'food',component:FoodComponent},
        {path:'history',component:HistoryComponent},
        {path:'money',component:MoneyComponent},
        {path:'movie',component:MovieComponent},
        {path:'music',component:MusicComponent},
        {path:'fashion',component:FashionComponent},
        {path:'political',component:PoliticalComponent},
        {path:'religion',component:ReligionComponent},
        {path:'science',component:ScienceComponent},
        {path:'travel',component:TravelComponent},
        {path:'sport',component:SportComponent},
        
           
      ]
    }  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
