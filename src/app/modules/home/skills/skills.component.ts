import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.skills =  this.homeService.skills()
  }

}
