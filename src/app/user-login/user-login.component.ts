import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public responce:any;

  public user:any;
  public pass:any;
  public avatarData:any=[];
  public userIconPath:any = "../../assets/github-icon.png";

  constructor(public loginService:LoginService) { 
    console.log("login-view component");
  }

  public userAvatar(usr:any){
    this.loginService.getAvatar(usr).subscribe(
      data => {
        this.avatarData = data;
        if(this.avatarData!=null||this.avatarData!=undefined)
          this.userIconPath = this.avatarData.items[0].avatar_url;
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }

  public login:any = ()=>{
    this.loginService.loginRes().subscribe(
      data => {
        this.responce = data;
        console.log(this.responce)
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }

  ngOnInit() {
  }

}
