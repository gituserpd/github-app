import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'f-icon',
  template:`
    <img src="{{imgPath}}">
  `,
  styles: [`
    img{
      height:25px;
      width:25px;
      border-radius:50%;
      margin:5px;
      box-shadow:0 0 3px black;
    }
    img:hover{
      box-shadow:0 0 4px blue;
    }
  `]
})
export class FIconComponent implements OnInit {

  @Input() avatarUrl:any;

  public imgPath:any

  constructor() { }

  ngOnInit() {
    this.imgPath = this.avatarUrl;
  }

}
