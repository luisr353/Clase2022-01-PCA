import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { 
    console.log("Spotify Service Listo");
  }

  getQuery( query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBzPgbWL_Nquh5vRa2ISuf5Wo9GJ2Q8-0tXOMk_Y8grv0HwwgXWWxMXajIysFEmccJrskQwiUoeU1_rN3E'
    });

    let data =this._http.get(url, {headers});
    return data ;

  }
  getNewRelease(){

    return this.getQuery('browse/new-releases').pipe( map((data:any)=>{
      return data["albums"].items;
    }));
    
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( (data: any) => data['artists'].items ));
  }

  getArtista(id: string){
  return this.getQuery(`artists/${id}`);
  }

  getToptrack(id: string){

    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe( map( (data: any)=> data["tracks"]) )

  }

}
