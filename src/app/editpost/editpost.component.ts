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
  constructor(private route:ActivatedRoute , private service:postService) {
      this.ind = route.snapshot.paramMap.get('id')
   }

  ngOnInit(){
    this.service.getData().subscribe((data)=>{
      this.postEdit = data[this.ind]
    })
   
  }
  savePost(){
    console.log(this.postEdit,this.postEdit.id);
    
    this.service.editData(this.postEdit,this.postEdit.id).subscribe((post)=>{
      console.log(post = this.postEdit);
      
    })
  }

}
