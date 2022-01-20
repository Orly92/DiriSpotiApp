import { Injectable } from '@angular/core';
import {SpotifyTokenService} from "../spotify-token/spotify-token.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {NewReleaseModel} from "../models/newReleaseModel";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(protected spotifyTokenService:SpotifyTokenService,protected http:HttpClient) { }

  async getNewRelease() :Observable<NewReleaseModel>{
    const url = "https://api.spotify.com/v1/browse/new-releases";
    const params = new HttpParams()
      .set("limit",21)
      .set("offset",0);

    const header = new HttpHeaders()
      .set('Authorization', await this.spotifyTokenService.getToken());

    return this.http.get<Observable<NewReleaseModel>>(url,{headers:header,params:params});
  }

}
