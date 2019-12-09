import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgrammingComponent } from './programming/programming.component';
import { DarkComponent } from './dark/dark.component';
import { JokesComponent } from './jokes/jokes.component';
import { JokesRoutingModule} from './jokes.routing';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [ProgrammingComponent, DarkComponent, JokesComponent],
  imports: [
    CommonModule,
    JokesRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ]
})
export class JokesModule { }
