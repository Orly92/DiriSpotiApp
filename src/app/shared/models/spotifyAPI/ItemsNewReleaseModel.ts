import {ImageModel} from "../ImageModel";

export interface ExternalUrlNewReleaseModel {
  spotify:string
}

interface ArtitsNewReleaseModel {
  external_urls:ExternalUrlNewReleaseModel,
  href:string,
  name:string,
  id:string,
  type:string,
  uri:string,
}


export interface ItemsNewReleaseModel {
  album_type:string,
  artists:ArtitsNewReleaseModel[],
  available_markets:string[],
  external_urls:ExternalUrlNewReleaseModel,
  href:string,
  id:string,
  images:ImageModel[],
  name:string,
  release_date:string,
  release_date_precision:string,
  total_tracks:number,
  type:string,
  uri:string,
}
