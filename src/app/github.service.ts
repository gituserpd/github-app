import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

//-------GITHUB AOUTH APP DETAILS--------//
  private client_id = "3ecf5c783fdf8196092b";
  private client_secret = "bdda25eed911b0d8c77611c4d0d7f853fb68cc71";
  private client = `client_id=${this.client_id}&client_secret=${this.client_secret}`;
  private token:any = 'e0ca81ec04ec1ad59d6bb4bdc9a0daa08e785c8c';

  public userName:any = "h";
  // public keyWord:any;

  constructor(public http:HttpClient) { 
    console.log("service constructor called");
  }

//--------------------BASE URL---------------------//

  public gitUrl:any = "https://api.github.com/users";
  // public gitUrl:any = "https://api.github.com/zen";


//=================================================//
//========FUNCTIONS FOR USER-VIEW COMPONENT========//
//=================================================//

  public getUsersData():Observable<any>{
    let url = `${this.gitUrl}/${this.userName}?${this.client}`;
    return this.http.get(url);
  }

  public getUserRepo():Observable<any>{
    let url = `${this.gitUrl}/${this.userName}/repos?${this.client}&per_page=100`;
    return this.http.get(url);
  }

  public getUserGists():Observable<any>{
    let url = `${this.gitUrl}/${this.userName}/gists?per_page=100`;
    return this.http.get(url);
  }

  public getUserFollowers():Observable<any>{
    let url = `${this.gitUrl}/${this.userName}/followers?per_page=100`;
    return this.http.get(url);
  }

  public getSuggestions(key):Observable<any>{
    let url = `https://api.github.com/search/users?q=${key}&per_page=10`;
    return this.http.get(url);
  }

  public updateUsersData(user:any){
    this.userName = user;
  }


}
