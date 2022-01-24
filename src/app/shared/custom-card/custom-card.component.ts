import {Component, Input, OnInit} from '@angular/core';
import {ItemsNewReleaseModel} from "../models/spotifyAPI/ItemsNewReleaseModel";
import {CustomCardModel} from "../models/CustomCardModel";
import {Router} from "@angular/router";

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input()
  public cardInfo!: CustomCardModel;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goArtistPage() {
    this.router.navigate([this.cardInfo.href]);
  }
}
