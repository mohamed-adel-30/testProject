import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(title:string ,limit:number): string {
    return title.substring(0,limit)
  }
}
