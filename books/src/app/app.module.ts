import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';

import * as fromBooks from './books';
// import * as fromServices from './services';

import { TitleizePipe } from './titleize.pipe';

TitleizePipe.skipWords = ['of', 'the'];

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ...fromBooks.components,
    TitleizePipe,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CookieModule.forRoot(),
  ],

  // providers: [...fromServices.services],

  // note that during lecture this did not work,
  // changed afterward and it works as expected, unclear as to why
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
