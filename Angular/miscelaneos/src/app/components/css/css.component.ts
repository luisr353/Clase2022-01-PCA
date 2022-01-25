import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `<p>
    Componente Css
  </p>`,
  styles:[`
   p{
     font-size: 20px;
     color: green;
   }
  `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
