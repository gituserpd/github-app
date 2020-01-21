import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'e-status',
  template:`
    <img src="{{imgPath}}">
  `,
  styles: []
})
export class StatusComponent implements OnInit {

  @Input() statusValue:any;

  public imgPath:any;

  constructor() { }

  ngOnInit() {
    if(this.statusValue==null)
      this.imgPath = "../../assets/no-github.png"
  }

}
