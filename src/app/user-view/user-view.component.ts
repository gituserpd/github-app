import { Component, OnInit, Input } from '@angular/core';
import {GithubService} from '../github.service';
// import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith, switchMap, debounceTime, tap, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  public enteredKeyword:any;
  public searchedData:any = null;
  public repoData:any = null;
  public gistsData:any = null;
  public followersData:any = null;
  public status:any = null;
  public userList:any = null;
  public copiedCloneUrl:any

  public p:number = 1;
  public collection:any[];

  constructor(public gitService:GithubService) {
    console.log("user-view component");
   }

  ngOnInit() {
    // this.userName = "bradtraversy";
    // this.searchUser();
    this.getData();
  }

  public getData:any = ()=>{
    this.gitService.getUsersData().subscribe(
      data => {
        this.status = 1;
        console.log("getting search result");
        this.searchedData = data;
        console.log(this.searchedData);
        this.getRepo();
        this.getGists();
        this.getFollowers();
      },
      error=>{
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getRepo:any = ()=>{
    this.gitService.getUserRepo().subscribe(
      data => {
        this.status = 1;
        console.log("getting Repos result");
        this.repoData = data;
        this.collection = this.repoData;
        console.log(this.repoData);
      },
      error=>{
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getGists:any = ()=>{
    this.gitService.getUserGists().subscribe(
      data => {
        this.status = 1;
        console.log("getting Gists result");
        this.gistsData = data;
        // this.collection = this.gistsData;
        console.log(this.gistsData);
      },
      error=>{
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getFollowers:any = ()=>{
    this.gitService.getUserFollowers().subscribe(
      data => {
        this.status = 1;
        console.log("getting Followers result");
        this.followersData = data;
        // this.collection = this.gistsData;
        console.log(this.followersData);
      },
      error=>{
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }


  public searchKeyword = (keyword:any)=>{
    this.status = 0
    this.searchedData = null;
    this.gitService.updateUsersData(keyword);
    this.getData();
    // this.userList=null;
  }

  public searchSuggest = (key:any)=>{
    this.gitService.getSuggestions(key).subscribe(
      data => {
        this.userList = data;
      },
      error=>{
        console.log(error.errorMessage);
      }
    )
  }
  

}
