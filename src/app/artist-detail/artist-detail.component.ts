import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../shared/services/spotify-service/spotify.service";
import {NgxSpinnerService} from "ngx-spinner";
import {ArtistModel} from "../shared/models/ArtistModel";
import {Location} from '@angular/common';
import {TrackModel} from "../shared/models/TrackModel";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  public artist!: ArtistModel;
  public topTracks: TrackModel[];
  constructor(protected router:ActivatedRoute,
              protected spotifyService:SpotifyService,
              protected spinner:NgxSpinnerService,
              protected location:Location) {
   this.topTracks = [];
  }

  ngOnInit(): void {
    this.spinner.show("spinner1");

    this.router.params.subscribe(async params=>{
      (await this.spotifyService.getArtist(params["id"])).subscribe(resp=>{
        this.artist = <ArtistModel>resp;
        this.spinner.hide("spinner1");
      },err=>{
        this.spinner.hide("spinner1");
      });
    })

    this.spinner.show("spinner2");

    this.router.params.subscribe(async params=>{
      (await this.spotifyService.getTopTracksByArtist(params["id"])).subscribe(resp=>{
        // @ts-ignore
        this.topTracks = <TrackModel[]>resp.tracks;
        this.spinner.hide("spinner2");
      },err=>{
        this.spinner.hide("spinner2");
      });
    })
  }

  goBack() {
    this.location.back();
  }
}
