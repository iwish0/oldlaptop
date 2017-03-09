import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  url:String;
  subMenu1:boolean=false;

  ngOnInit() {
  	// subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.url = params['url'];
        console.log(this.url+ "sfsfd");
      });
  }

  onClickSubMenu(){
  	this.subMenu1=!this.subMenu1;

  }


}
