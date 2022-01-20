import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../shared/spotify-service/spotify.service";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(protected spotifyService:SpotifyService) {
    this.spotifyService.getNewRelease();
  }

  ngOnInit(): void {
  }

}
