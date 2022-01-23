
interface ExternalUrlNewReleaseModel {
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

interface ImagesNewReleaseModel {
  height:number,
  url:string,
  width:number
}

export interface ItemsNewReleaseModel {
  album_type:string,
  artists:ArtitsNewReleaseModel[],
  available_markets:string[],
  external_urls:ExternalUrlNewReleaseModel,
  href:string,
  id:string,
  images:ImagesNewReleaseModel[],
  name:string,
  release_date:string,
  release_date_precision:string,
  total_tracks:number,
  type:string,
  uri:string,
}
