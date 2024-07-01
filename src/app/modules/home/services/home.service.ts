import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  aboutDetail = `Software Developer with 8+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ All versions, Javascript, and UI with Responsive Designs .
  Have good understanding of NodeJS, Jquery, Bootstrap, Wordpress and Cordova.`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://docs.google.com/document/d/1WODFuhIzQw2AXPsjt6f3rs-EDWhdhT8s89fOTrGRh70/edit?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'HTML CSS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'Cordova Ionic',
      'progress': '60%'
    }
  ];

  exprienceData: any = [
    {
      id: 3,
      company: 'Building Blocks Software Services pvt Ltd',
      location: 'Coimbatore',
      timeline: 'Oct 2019 to Present',
      role: 'Senior UI/Angular Developer'
    },
    {
      id: 2,
      company: 'Meark Enterprise pvt Ltd',
      location: 'Coimbatore',
      timeline: 'Feb 2018 to Oct 2019',
      role: 'UI/Angular Developer'
    },
    {
      id: 1,
      company: 'Agnitio System',
      location: 'Coimbatore',
      timeline: 'Mar 2016 - Feb 2018',
      role: 'Web Developer'
    },


  ];

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

}
