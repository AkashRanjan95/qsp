// import { LoginComponent } from './auth/login/login.component';
import { LoginComponent } from '../app/auth/login/login.component';
import { CoursesComponent } from './courses.component';
import {RegisterComponent} from '../app/auth/register/register.component'
import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule} from '@angular/router';

import { from } from 'rxjs';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { EmpModule } from './emp/emp.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, CoursesComponent, HeaderComponent, RegisterComponent, UserComponent, PagenotfoundComponent, HomeComponent, LoginComponent
  ],//adding components, directives, pipes
  imports: [
    BrowserModule, //Re-exports CommonModule and ApplicationModule by Default
    EmpModule,//custom module
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path:'register', component: RegisterComponent},
      {path: 'users', component: UserComponent},
      {path: '**', component:PagenotfoundComponent}
    ])
  ],//adding modules; e.g. Formsmodule, Routermodule, reactiveformmodule
  providers: [],//adding services
  bootstrap: [AppComponent]//bootstraping and root component...
})
export class AppModule { }


