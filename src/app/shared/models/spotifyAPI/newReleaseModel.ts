import {ItemsNewReleaseModel} from "./ItemsNewReleaseModel";

interface AlbumsNewReleaseModel {
  href:string,
  items:ItemsNewReleaseModel[],
  limit:number,
  next:string,
  offset:number,
  previous:string,
  total:number
}

export interface NewReleaseModel {
  albums:AlbumsNewReleaseModel
}
