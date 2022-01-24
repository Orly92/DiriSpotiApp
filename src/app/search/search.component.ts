import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchArtist: string;

  constructor() {
    this.searchArtist = ""
  }

  ngOnInit(): void {
  }

}
