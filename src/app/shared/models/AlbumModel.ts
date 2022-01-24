import {ExternalUrlNewReleaseModel} from "./spotifyAPI/ItemsNewReleaseModel";
import {ImageModel} from "./ImageModel";

export interface AlbumModel {
  id:string,
  href:string,
  external_urls:ExternalUrlNewReleaseModel,
  images:ImageModel[],
  name:string,
  release_date:string,
  total_tracks:number
}
