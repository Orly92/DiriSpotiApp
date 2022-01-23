import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../shared/spotify-service/spotify.service";
import {ItemsNewReleaseModel} from "../shared/models/ItemsNewReleaseModel";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public itemsNewRelease: ItemsNewReleaseModel[];
  public newReleaseErrorMessage:string;

  constructor(protected spotifyService:SpotifyService) {
    this.itemsNewRelease = [];
    this.newReleaseErrorMessage = "";

    this.setItemnNewRelease();
  }

   ngOnInit(): void {

  }

  async setItemnNewRelease(){
    (await this.spotifyService.getNewRelease()).subscribe(resp=>{
      // @ts-ignore
      this.itemsNewRelease = resp.albums.items;
      console.log("se salvaron los datos",this.itemsNewRelease);
    },err=>{
      console.log("Ocurrio un erro",err);
    });
  }
}
