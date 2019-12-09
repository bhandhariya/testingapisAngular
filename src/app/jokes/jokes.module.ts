import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming/programming.component';
import { DarkComponent } from './dark/dark.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesRoutingModule} from './jokes.routing'
@NgModule({
  declarations: [ProgrammingComponent, DarkComponent, JokesComponent],
  imports: [
    CommonModule,
    JokesRoutingModule

  ]
})
export class JokesModule { }
