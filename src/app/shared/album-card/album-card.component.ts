import {Component, Input, OnInit} from '@angular/core';
import {ItemsNewReleaseModel} from "../models/ItemsNewReleaseModel";

@Component({
  selector: 'album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  @Input()
  public album!: ItemsNewReleaseModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
