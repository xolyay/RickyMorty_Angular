import { Component, OnInit } from '@angular/core';
import { Nav } from './nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public nav: Nav[] = [
    { label: 'home', url:'/'},
    { label: 'characters', url:'/characters'},
    { label: 'locations', url:'/locations'},
    { label: 'episodes', url:'/episodes'},
    { label: 'about', url:'/about'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
