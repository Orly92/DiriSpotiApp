import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../shared/services/spotify-service/spotify.service";
import {NgxSpinnerService} from "ngx-spinner";
import {TransformService} from "../shared/services/transform/transform.service";
import {ErrorModel} from "../shared/models/ErrorModel";
import {CustomCardModel} from "../shared/models/CustomCardModel";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchArtist: string;
  public errors:ErrorModel[];
  public artists:CustomCardModel[];

  constructor(protected spotifyService:SpotifyService,
              protected spinner:NgxSpinnerService,
              protected transformService:TransformService) {
    this.searchArtist = "";
    this.errors = [];
    this.artists = [];
  }

  ngOnInit(): void {
  }

  async search() {
    await this.spinner.show("spinner");
    (await this.spotifyService.searchArtist(this.searchArtist)).subscribe(resp=>{
        // @ts-ignore
      this.artists = this.transformService.transformArtistToCustomCardModel(resp.artists.items);
      this.spinner.hide("spinner");
      console.log(this.artists);
    },err=>{
      this.spinner.hide("spinner");
      this.errors = [{
        message:err.message
      }]
    });
  }
}
