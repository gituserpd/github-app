import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'status',
  template:`
    <img class="center img-fluid" src="{{imgPath}}">
  `,
  styles: [`.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    }`]
})
export class StatusComponent implements OnInit {

  @Input() statusValue:any;
  loginProgress:boolean;

  public imgPath:any;

  constructor() { }

  ngOnInit() {

    if(this.statusValue==null)
      this.imgPath = "../../assets/no-github.png";
    else if(this.statusValue==0)
      this.imgPath = "../../assets/searching.gif";
    else if(this.statusValue==-1)
      this.imgPath = "../../assets/no-result.gif";
    else if(this.statusValue==2)
      this.imgPath = "../../assets/loading.gif";
      
    }

}
