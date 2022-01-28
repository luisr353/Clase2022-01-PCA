import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VillanosService } from '../../servicios/villanos.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

  villano: any = {};

  constructor(private _activeRoute: ActivatedRoute,
     private _villanosServices: VillanosService) { 

      this._activeRoute.params.subscribe( params => {
        this.villano = this._villanosServices.getVillano(params['id'])
      })
  }

  ngOnInit(): void {
  }

}
