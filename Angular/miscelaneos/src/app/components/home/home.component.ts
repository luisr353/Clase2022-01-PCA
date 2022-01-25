import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
   <br>
   <app-css></app-css>
   <br>
   <app-clases></app-clases>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
