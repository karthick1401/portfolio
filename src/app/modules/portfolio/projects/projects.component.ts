import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any =[];
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.projects = this.portfolioService.getProjects()
  }

}
