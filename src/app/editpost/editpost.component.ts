import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {postService} from './../posts.service'

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent implements OnInit {
  ind;
  postEdit:any = {};
  newPost:any= {}
  newPostTitle = document.getElementById("newTitle")
  newPostBody = document.getElementById("newBody")
  
  
  constructor(private route:ActivatedRoute , private service:postService) {
      this.ind = route.snapshot.paramMap.get('id')
      console.log(this.newPostTitle);
      
   }

  ngOnInit(){
    this.service.getData().subscribe((data)=>{
      this.postEdit = data[this.ind]
    })
   
  }
  savePost(t,b){
    this.newPost = {
      "title":t.value,
      "body":b.value
    }

    console.log(this.postEdit,this.postEdit.id);
    
    this.service.editData(this.newPost,this.postEdit.id).subscribe((post)=>{
      console.log(post);
      
    })
  }

}
