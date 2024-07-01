import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeRoutingModule } from '../app/modules/home/home-routing.module';
import { PortfolioRoutingModule } from '../app/modules/portfolio/portfolio-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeRoutingModule,
    PortfolioRoutingModule,
    SharedModule,
    HomeModule,
    PortfolioModule,
    FormsModule,                               
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
