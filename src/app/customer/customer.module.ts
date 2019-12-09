import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer.routing';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [CustomerComponent, HomeComponent, DetailsComponent],
  imports: [
    CommonModule,CustomerRoutingModule
  ]
})
export class CustomerModule { }
