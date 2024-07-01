import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', 
    loadChildren: () => import('./modules/home/home-routing.module').then(m => m.HomeRoutingModule)
  },
  {
    path: 'portfolio', 
    loadChildren: () => import('./modules/portfolio/portfolio-routing.module').then(m => m.PortfolioRoutingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
