import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SpotifyService} from "../shared/services/spotify-service/spotify.service";
import {ItemsNewReleaseModel} from "../shared/models/spotifyAPI/ItemsNewReleaseModel";
import {NgxSpinnerService} from "ngx-spinner";
import {ErrorModel} from "../shared/models/ErrorModel";
import {TransformService} from "../shared/services/transform/transform.service";
import {CustomCardModel} from "../shared/models/CustomCardModel";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public itemsNewRelease: CustomCardModel[];
  public newReleaseErrors:ErrorModel[];

  constructor(protected spotifyService:SpotifyService,protected spinner:NgxSpinnerService,
              protected transformService:TransformService) {
    this.itemsNewRelease = [];
    this.newReleaseErrors = [];
  }

   ngOnInit(): void {
     this.showSpinner("spinner");

     this.setItemNewRelease();
  }

  async setItemNewRelease(){

    (await this.spotifyService.getNewRelease()).subscribe(resp=>{
      // @ts-ignore
      this.itemsNewRelease = this.transformService.transformToCustomCardModel(resp.albums.items);
      console.log("se salvaron los datos",this.itemsNewRelease);
      this.hideSpinner("spinner");
    },err=>{
      this.hideSpinner("spinner");
      this.newReleaseErrors = [{
        message:err.message
      }]
    });
  }

  showSpinner(name: string) {
    this.spinner.show(name);
  }

  hideSpinner(name: string) {
    this.spinner.hide(name);
  }

}
