import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github.service'

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public responce:any;
  public access:any;

  public user:any;
  // public pass:any;
  // public avatarData:any=[];
  public userIconPath:any = "../../assets/github-icon.png";
  public errorMessage:string = null;

  constructor(public gihubService:GithubService) { 
    console.log("login-view component");
  }

  /*
  public userAvatar(usr:any){
    this.loginService.getAvatar(usr).subscribe(
      data => {
        this.avatarData = data;
        if(this.avatarData!=null||this.avatarData!=undefined)
          if(this.avatarData.total_count==0){
            this.errorMessage = "No user found please check username again";
            this.userIconPath = "../../assets/github-icon.png";
          } else{
            this.errorMessage=null;
            this.userIconPath = this.avatarData.items[0].avatar_url;
          }
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }
  */

  /*
  public login:any = (acs:any)=>{
    this.loginService.loginRes(acs).subscribe(
      data => {
        this.responce = data;
        console.log(this.responce)
        this.user = data.login;
        console.log(this.user);

      },
      error=>{
        this.errorMessage = "UNAUTHORIZED ACCESS TOKEN";
        console.log(error.errorMessage);
      }
    )
  }
  */

  public loginToGithub = ()=>{
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=3ecf5c783fdf8196092b&scope=user';
  }

  ngOnInit() {
  }

}
