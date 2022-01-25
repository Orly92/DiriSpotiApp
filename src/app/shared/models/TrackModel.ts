import {ExternalUrlNewReleaseModel} from "./spotifyAPI/ItemsNewReleaseModel";
import {ArtistModel} from "./ArtistModel";
import {AlbumModel} from "./AlbumModel";

export interface TrackModel {
  href:string,
  external_urls:ExternalUrlNewReleaseModel,
  is_playable:boolean,
  id:string,
  name:string,
  popularity:number,
  preview_url:string,
  track_number:number,
  type:string,
  duration_ms:number,
  disc_number:number,
  artist:ArtistModel[],
  album:AlbumModel,
  uri:string
}
