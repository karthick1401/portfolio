import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  projects:any = [
    {
      id: 1,
      title: 'Fyxt',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/Fyxt.png',
      tech: 'Angular 14, Python, MangoDB'
    },

    {
      id: 2,
      title: 'BOD',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/bod.gif',
      tech: 'Angular 14, Python, MangoDB'
    },


    {
      id: 3,
      title: 'Nectory',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB'
    },

    {
      id: 4,
      title: 'Fyxt',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/Fyxt.png',
      tech: 'Angular 14, Python, MangoDB'
    },

    {
      id: 5,
      title: 'BOD',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/bod.gif',
      tech: 'Angular 14, Python, MangoDB'
    },


    {
      id: 6,
      title: 'Nectory',
      desc: '',
      livedemo: '#',
      githurl: '#',
      mediumlink: '#',
      description: 'Application developed for Integrated communication, task management, vendor procurement and lease term abstraction all in one system. it also provides a seamless experience for tenants and owner-occupiers. With multiple options for communication, vendor procurement, rent pay.',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB'
    },

  ]

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

}
