import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(posts:any[] ,term:string): any {

    if(term == undefined){
      return posts
    }

    return posts.filter(function(posts){
      return posts.title.toLowerCase().includes(term.toLowerCase())
    })
  }

  

}
