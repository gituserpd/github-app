import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
import { ActivatedRoute } from '@angular/router';
// import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith, switchMap, debounceTime, tap, finalize} from 'rxjs/operators';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  public enteredKeyword: any;
  public searchedData: any = null;
  public repoData: any = null;
  public gistsData: any = null;
  public followersData: any = null;
  public status: any = null;
  public userList: any = null;

  //FOR LOGIN FUNCTION
  public accessToken: any;
  public user: any
  public loginBtn: boolean;
  private client_id = "3ecf5c783fdf8196092b";

  //FOR PAGINATION
  public p: number = 1;
  public collection: any[];

  //VARIABLE TO STORE RESPONSE CODE AFTER LOGIN
  public code: any;

  constructor(public gitService: GithubService, private activatedRoute: ActivatedRoute) {
    console.log("user-view component");
  }

  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']) {
        this.code = params['code'];
        this.accessTokenByCode(this.code);
        this.status=2;
      } else {
        console.log("No Params")
        this.accessToken = null;
        this.user = null;
        this.status = null;
      }
    });
  }

  public getData: any = () => {
    this.gitService.getUsersData().subscribe(
      data => {
        this.status = 1;
        console.log("getting search result");
        this.searchedData = data;
        console.log("GetData Mrthod:-");
        console.log(this.searchedData);
        this.getRepo();
        this.getGists();
        this.getFollowers();
      },
      error => {
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getRepo: any = () => {
    this.gitService.getUserRepo().subscribe(
      data => {
        this.status = 1;
        console.log("getting Repos result");
        this.repoData = data;
        this.collection = this.repoData;
      },
      error => {
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getGists: any = () => {
    this.gitService.getUserGists().subscribe(
      data => {
        this.status = 1;
        console.log("getting Gists result");
        this.gistsData = data;
      },
      error => {
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }

  public getFollowers: any = () => {
    this.gitService.getUserFollowers().subscribe(
      data => {
        this.status = 1;
        console.log("getting Followers result");
        this.followersData = data;
      },
      error => {
        this.status = -1;
        console.log(error.errorMessage);
      }
    )
  }


  public searchKeyword = (keyword: any) => {
    if (keyword != null || keyword != undefined) {
      this.searchedData = null;
      this.status = 0
      this.gitService.updateUsersData(keyword);
      this.getData();
    } else {
      this.status = null;
    }
  }

  public searchSuggest = (key: any) => {
    this.gitService.getSuggestions(key).subscribe(
      data => {
        this.userList = data;
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

  // FUNCTIONALITY FOR LOGIN AND AFTER LOGIN

  public accessTokenByCode = (code: any) => {
    this.gitService.getAccessToken(code)
      .subscribe(
        data => {
          console.log("Access Token:-");
          console.log(data);
        },
        error => {
          console.log("Error getting Acces Token!");
          this.accessToken = error.error.text;
          console.log(this.accessToken);
          this.getDataUsingToken(this.accessToken);//TO LAND USER's DASHBOARD
        }
      )
  }

  public getDataUsingToken = (token: any) => {
    this.gitService.getUserByAccesToken(token).subscribe(
      data => {
        this.status=0;
        this.user = data.login;
        this.searchKeyword(this.user);
      },
      error => {
        console.log(error.errorMessage);
        this.status=2;
        this.loginToGithub();
      }
    )
  }

  public logoutByGithub = () => {
    this.status=2;
    window.location.href = `https://github.com/logout`;
    this.accessToken = null;
    this.user = null;
  }


  public loginToGithub = () => {
    this.status=2;
    window.location.href = 'https://github.com/login/oauth/authorize?client_id=3ecf5c783fdf8196092b&scope=user';
  }



}
