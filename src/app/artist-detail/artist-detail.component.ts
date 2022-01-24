import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../shared/services/spotify-service/spotify.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ArtistModel} from "../shared/models/ArtistModel";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  public artist!: ArtistModel;
  constructor(protected router:ActivatedRoute,
              protected spotifyService:SpotifyService,
              protected spinner:NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show("spinner1");

    this.router.params.subscribe(async params=>{
      (await this.spotifyService.getArtist(params["id"])).subscribe(resp=>{
        this.artist = <ArtistModel>resp;
        console.log(this.artist);
        this.spinner.hide("spinner1");
      },err=>{
        this.spinner.hide("spinner1");
      });
    })
  }

}
