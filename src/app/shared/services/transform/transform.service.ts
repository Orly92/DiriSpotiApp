import { Injectable } from '@angular/core';
import {ItemsNewReleaseModel} from "../../models/spotifyAPI/ItemsNewReleaseModel";
import {CustomCardModel} from "../../models/CustomCardModel";

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  transformNewReleaseToCustomCardModel(objectArray:ItemsNewReleaseModel[]):CustomCardModel[]{
    return objectArray.map(object=>{
      const relations = object.artists.map( artist =>{
        return {
          ...artist
        };
      });
      return {
        images:object.images,
        title:object.name,
        type:"Album",
        relations:relations
      };
    })
  }

  transformArtistToCustomCardModel(items: any[]):CustomCardModel[] {
    // @ts-ignore
    return items.map(item=>{
      return {
        images:item.images,
        title:item.name,
        type:"Artist",
        relations:[]
      };
    });
  }
}
