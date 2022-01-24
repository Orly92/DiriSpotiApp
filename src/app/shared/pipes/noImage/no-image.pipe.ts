import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {

    let noImage = '../../../assets/img/noimage.png';

    return (!images || images?.length == 0) ? noImage:images[0].url;
  }

}
