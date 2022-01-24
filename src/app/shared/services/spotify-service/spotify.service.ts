import { Injectable } from '@angular/core';
import {SpotifyTokenService} from "../spotify-token/spotify-token.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {NewReleaseModel} from "../../models/spotifyAPI/newReleaseModel";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(protected spotifyTokenService:SpotifyTokenService,protected http:HttpClient) { }

  async getNewRelease(){
    const url = "https://api.spotify.com/v1/browse/new-releases";
    const params = new HttpParams()
      .set("limit",21)
      .set("offset",0);
    const token = await this.spotifyTokenService.getToken();
    const header = new HttpHeaders()
      .set('Authorization', token);

    return this.http.get(url,{headers:header,params:params});
  }

  async searchArtist(searchParam:string){
    const url = "https://api.spotify.com/v1/search";
    const params = new HttpParams()
      .set("market","ES")
      .set("type","artist")
      .set("q","searchParam")
      .set("limit",21)
      .set("offset",0);

    const token = await this.spotifyTokenService.getToken();
    const header = new HttpHeaders()
      .set('Authorization', token);

    return this.http.get(url,{headers:header,params:params});
  }

}
