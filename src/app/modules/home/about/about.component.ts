import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about1: any;
  about2: any;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.about1 =  this.homeService.about;
    this.about2 =  this.homeService.aboutDetail;
  }

}
