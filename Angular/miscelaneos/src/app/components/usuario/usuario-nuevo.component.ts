import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template:` <p> usuario nuevo</p>`  
})
export class UsuarioNuevoComponent implements OnInit{

    constructor(private _router:ActivatedRoute){
        this._router.parent?.params.subscribe( parametros =>{
            console.log("Ruta Hija usuario nuevo");
            console.log(parametros);
        });
    }

    ngOnInit(): void {
        
    }


}