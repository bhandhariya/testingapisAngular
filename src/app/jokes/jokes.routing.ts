import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProgrammingComponent } from './programming/programming.component';
import { DarkComponent } from './dark/dark.component';
import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
    {
      path : '', component: JokesComponent, children : [
        {path: 'programming',
        component:ProgrammingComponent
        },
        {path: 'dark',
        component:DarkComponent
        }
           
      ]
    }  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
