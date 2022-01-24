import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageDimensions'
})
export class ImageDimensionsPipe implements PipeTransform {

  transform(images: any[], ...args: string[]): number {
    const dimension = 640;

    return (!images || images.length == 0) ? dimension : images[0][args[0]]
  }

}
