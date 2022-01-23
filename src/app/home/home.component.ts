import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SpotifyService} from "../shared/spotify-service/spotify.service";
import {ItemsNewReleaseModel} from "../shared/models/ItemsNewReleaseModel";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public itemsNewRelease: ItemsNewReleaseModel[];
  public newReleaseErrorMessage:string;

  constructor(protected spotifyService:SpotifyService,protected spinner:NgxSpinnerService) {
    this.itemsNewRelease = [];
    this.newReleaseErrorMessage = "";
  }

   ngOnInit(): void {
     this.showSpinner("spinner");

     this.setItemNewRelease();
  }

  async setItemNewRelease(){

    (await this.spotifyService.getNewRelease()).subscribe(resp=>{
      // @ts-ignore
      this.itemsNewRelease = resp.albums.items;
      console.log("se salvaron los datos",this.itemsNewRelease);
      this.hideSpinner("spinner");
    },err=>{
      console.log("Ocurrio un erro",err);
      this.hideSpinner("spinner");
    });
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }
}
