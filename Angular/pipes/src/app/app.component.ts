import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    nombre: string = "Pepito perez";
    nombre2: string = "PePitO pErEz";

    video = "https://www.youtube.com/embed/Mv7hHrw1ymQ";

    arreglo: number[] = [1,2,3,4,5,6,7,8,9,10];
  
    PI: number = Math.PI;

    salario: number = 4524000;

    valorPromesa = new Promise<string>( ( resolve, reject )=>{
      setTimeout(()=>{
        resolve("LLego la data");
      },4500)
    });

    heroe = {
      nombre: 'Logan',
      clave: 'wolverine',
      edad: 200,
      dir:{
         calle: 'Primera',
         casa: 20
      }
    };

    fecha: Date = new Date();
    idioma:string = 'en';

    cambiarIdioma(valor: string){
      console.log(valor);
      this.idioma = valor;
    }


}
