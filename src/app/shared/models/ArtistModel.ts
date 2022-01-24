import {ExternalUrlNewReleaseModel} from "./spotifyAPI/ItemsNewReleaseModel";
import {ImageModel} from "./ImageModel";

export interface ArtistModel {
  id:string,
  href:string,
  external_urls:ExternalUrlNewReleaseModel[],
  followers:{
    href:string,
    total:number
  },
  genres:string[],
  images:ImageModel[],
  name:string,
  popularity:number,
  type:string,
  uri:string
}
