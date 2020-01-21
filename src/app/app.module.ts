import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { GithubService } from './github.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { ObjArr } from './obj-arr.pipe';
import { FIconComponent } from './f-icon/f-icon.component';
import { StatusComponent } from './error-status/status.component';
import { LoginService } from './login.service';
// import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UserViewComponent,
    UserLoginComponent,
    ObjArr,
    FIconComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    // MaterialModule
  ],
  providers: [GithubService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
