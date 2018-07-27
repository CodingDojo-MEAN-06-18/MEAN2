import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as fromBooks from './books';
// import * as fromServices from './services';

import { TitleizePipe } from './titleize.pipe';

TitleizePipe.skipWords = ['of', 'the'];

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, ...fromBooks.components, TitleizePipe, NavComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],

  // providers: [...fromServices.services],

  // note that during lecture this did not work,
  // changed afterward and it works as expected, unclear as to why
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
