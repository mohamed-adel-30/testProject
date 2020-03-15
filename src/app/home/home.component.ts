import { Component, OnInit } from '@angular/core'
import {postService} from "./../posts.service"


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  users: any = [];
  data = [];
  term:string;
  constructor(private posts: postService ) {   }

  ngOnInit(){

    this.posts.getData().subscribe(data => {
      this.users = data;

      console.log(this.users);

    })

      
    
  }
  deletePost(id){
    this.posts.deleteData(id).subscribe(()=>{
      let index = this.findIndex(id)
      this.users.splice(index,1)
    })
  }

  findIndex(id){
    for(let i = 0 ; i < this.users.length ; i++){
      if(this.users[i].id === id){
        return i
      }
    }
  }

}
