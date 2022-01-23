import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {SpotifyTokenRespModel} from "../models/spotifyTokenResp";

@Injectable({
  providedIn: 'root'
})
export class SpotifyTokenService {

  protected token:string;
  protected tokenExpiresDate:number;
  protected clientId:string;
  protected clientSecret:string;
  protected grantType:string;

  constructor(protected http:HttpClient) {
    this.token = "";
    this.tokenExpiresDate = Date.now();

    this.clientId = "f485685a4918473d87a25557024112d0";
    this.clientSecret = "a9025eb6d37b4d8ab5f840aa81f83715";
    this.grantType = "client_credentials";
  }

  async getToken() : Promise<string>{
    const dateExpires = new Date().setMilliseconds(-this.tokenExpiresDate);
    if(this.token === "" || this.tokenExpiresDate < dateExpires){
        await this.saveToken();
    }
    return this.token;
  }

  private async saveToken() {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
     const body = new HttpParams()
       .set('grant_type', this.grantType)
       .set('client_id', this.clientId)
       .set('client_secret', this.clientSecret);

      const resp = await this.http.post<SpotifyTokenRespModel>("https://accounts.spotify.com/api/token",
        body.toString(),{
        headers: header
      }).toPromise();
    // @ts-ignore
    this.token = `${resp.token_type} ${resp.access_token}`;
    // @ts-ignore
    this.tokenExpiresDate = new Date().setMilliseconds(resp.expires_in);
  }
}
