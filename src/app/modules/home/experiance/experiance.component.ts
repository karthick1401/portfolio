import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.scss']
})
export class ExperianceComponent implements OnInit {
  workexp: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.workexp = this.homeService.exprience();
  }

}
