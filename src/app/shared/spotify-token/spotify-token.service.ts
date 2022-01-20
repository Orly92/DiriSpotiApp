import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

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

    console.log(this.tokenExpiresDate);
  }

  async getToken(){
    const dateExpires = new Date().setMinutes(-this.tokenExpiresDate);
    if(this.token === "" || this.tokenExpiresDate < dateExpires){
        await this.saveToken();
    }
    return this.token;
  }

   private saveToken() {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
     const body = new HttpParams()
       .set('grant_type', this.grantType)
       .set('client_id', this.clientId)
       .set('client_secret', this.clientSecret);

      this.http.post("https://accounts.spotify.com/api/token",body.toString(),{
        headers: header
      }).subscribe(resp => {
        const bodyResponse = resp.body;
        this.token = `${bodyResponse["token_type"]} ${bodyResponse["access_token"]}`;
        this.tokenExpiresDate = new Date().setMilliseconds(bodyResponse["expires_in"]);
      });
  }
}
