import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeModule } from '../home/home.module';
import { ProtfolioSectionComponent } from './protfolio-section/protfolio-section.component';
import { ProjectsComponent } from './projects/projects.component'

@NgModule({
  declarations: [
    PortfolioComponent,
    ProtfolioSectionComponent,
    ProjectsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PortfolioRoutingModule,
    HomeModule
  ]
})
export class PortfolioModule { }
