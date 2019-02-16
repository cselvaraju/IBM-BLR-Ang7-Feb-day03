import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ActorlistComponent } from './components/actorlist/actorlist.component';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';

import { ActordataService } from './services/actordata.service';
import { ObservableService } from './services/observable.service';
import { PostService } from './services/post.service';

import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { PostdemoComponent } from './components/postdemo/postdemo.component';
import { HomeComponent } from './components/home/home.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorlistComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    ObservabledemoComponent,
    PostdemoComponent,
    HomeComponent,
    Friendly404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ActordataService,
    ObservableService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
