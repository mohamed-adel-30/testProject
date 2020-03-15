import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {postService} from "./../posts.service"
 

@Component({
  selector: 'app-ay7aga',
  templateUrl: './ay7aga.component.html',
  styleUrls: ['./ay7aga.component.scss']
})
export class Ay7agaComponent implements OnInit {
  ind;
  postDetails:any = {};
  constructor( private route:ActivatedRoute , private service:postService) { 
    this.ind = route.snapshot.paramMap.get('id')
  }

  ngOnInit(){
    this.service.getData().subscribe((data)=>{


      this.postDetails = data[this.ind]
      
    
    })
    
  }

}
