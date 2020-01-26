import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  //-------GITHUB AOUTH APP DETAILS--------//
  private client_id = "3ecf5c783fdf8196092b";
  private client_secret = "bdda25eed911b0d8c77611c4d0d7f853fb68cc71";
  private client = `client_id=${this.client_id}&client_secret=${this.client_secret}`;

  public userName: any = "";
  // public keyWord:any;

  constructor(public http: HttpClient) {
    console.log("service constructor called");
  }

  //--------------------BASE URL---------------------//

  public gitUrl: any = "https://api.github.com/users";
  // public gitUrl:any = "https://api.github.com/zen";


  //=================================================//
  //========FUNCTIONS FOR USER-VIEW COMPONENT========//
  //=================================================//

  public getUsersData(): Observable<any> {
    let url = `${this.gitUrl}/${this.userName}?${this.client}`;
    return this.http.get(url);
  }

  public getUserRepo(): Observable<any> {
    let url = `${this.gitUrl}/${this.userName}/repos?${this.client}&per_page=100`;
    return this.http.get(url);
  }

  public getUserGists(): Observable<any> {
    let url = `${this.gitUrl}/${this.userName}/gists?${this.client}&per_page=100`;
    return this.http.get(url);
  }

  public getUserFollowers(): Observable<any> {
    let url = `${this.gitUrl}/${this.userName}/followers?per_page=100`;
    return this.http.get(url);
  }

  public getSuggestions(key): Observable<any> {
    let url = `https://api.github.com/search/users?q=${key}&per_page=10`;
    return this.http.get(url);
  }

  public updateUsersData(user: any) {
    this.userName = user;
  }


  //==================================================//
  //========FUNCTIONS FOR USER-LOGIN=================//
  //=================================================//

  public getAccessToken(code:any): Observable<any> {
    // let url = `https://github.com/login/oauth/access_token?client_id=${this.client_id}&client_secret=${this.client_secret}&code=${code}`;
    // return this.http.get(url);

    return this.http
    .post<string>(
        this.baseUrl + '/Tickets/getTicket',
        JSON.stringify(value),
    { headers, responseType: 'text' as 'json' }
    )
    .map(res => {
        return res;
    })
    .catch(this.handleError);

  }

  public getUserByAccesToken(token:any):Observable<any>{
    let url = `https://api.github.com/user?client_id=${this.client_id}&${token}`;
    return this.http.get(url);
  }


}
