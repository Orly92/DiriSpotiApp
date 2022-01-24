export interface CustomCardModel {
  title:string,
  images:{
    height:number,
    url:string,
    width:number
  }[],
  type:string,
  relations:{
    name:string,
    id:string,
    type:string,
    uri:string,
  }[]
}
