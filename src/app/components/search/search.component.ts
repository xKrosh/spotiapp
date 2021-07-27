import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
    '.mb{ margin-bottom: 20px;}'
  ]
})
export class SearchComponent {

  constructor(private spotify:SpotifyService) { }

  artists: any[] = []

  buscar(termino:string){
    console.log(termino);
    this.spotify.getArtista(termino)
                .subscribe( (data:any) =>{
                    console.log(data);
                    this.artists = data;
                })
    
  }

}
