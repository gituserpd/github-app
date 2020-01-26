import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

//-----------------USE THIS ACCES TOKEN FOR LOGIN----------------//
//------------8697963857b79f43164efc6390c99b0721503794-----------//
//---------------------------------------------------------------//

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

  public loginRes(acs:any):Observable<any>{
    let url = `https://api.github.com/user?access_token=${acs}`;
      return this.http.get(url);
  }


}
