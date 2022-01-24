import {Component, Input, OnInit} from '@angular/core';
import {ItemsNewReleaseModel} from "../models/ItemsNewReleaseModel";

@Component({
  selector: 'custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {

  @Input()
  public album!: ItemsNewReleaseModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
