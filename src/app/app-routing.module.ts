import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'jokes',
  loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule)
  },
  {path: 'customer',
  loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
