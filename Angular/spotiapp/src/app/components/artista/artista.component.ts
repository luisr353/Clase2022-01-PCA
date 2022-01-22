import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista : any = {};
  topTrack: any[] = [];

  constructor( private _spotify: SpotifyService,
    private _router: ActivatedRoute) { 
    
      this._router.params.subscribe( params =>{
          this.getArtista( params['id']);
          this.getTopTrack( params['id'] );
      });
  
      
  }

  ngOnInit(): void {
  }

  getArtista(id: string){
      this._spotify.getArtista(id).subscribe( artista =>{
        console.log(artista);
        this.artista = artista;
      })
  }
  getTopTrack(id: string){
    this._spotify.getToptrack(id).subscribe( tracks =>{
      console.log(tracks);
      this.topTrack = tracks;
    })
  }
}
