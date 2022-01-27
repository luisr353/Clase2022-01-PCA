import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit {

  alert: string = "alert-warning";
  loading: boolean = false;

  propiedades:any = {
    danger: false
  }
  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
