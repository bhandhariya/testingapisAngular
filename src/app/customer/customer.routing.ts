import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from "../customer/home/home.component";
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
    {
      path : '', component: CustomerComponent, children : [
        {path: 'home',
        component:HomeComponent
        },
        {path: 'detail',
        component:DetailsComponent
        }
           
      ]
    }  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
