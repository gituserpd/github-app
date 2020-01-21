import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) {
    console.log("service constructor called");
  }

//==================================================//
//========FUNCTIONS FOR USER-LOGIN COMPONENT========//
//==================================================//

  public getAvatar(usr:any){
    let url = `https://api.github.com/search/users?q=${usr}&per_page=1`;
    return this.http.get(url);
  }

  public loginRes():Observable<any>{
    let url = `https://github.com/login/oauth?access_token=e0ca81ec04ec1ad59d6bb4bdc9a0daa08e785c8c&token_type=bearer`;
      return this.http.get(url);
  }


}
