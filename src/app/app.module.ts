import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Pages/HomePage/home-page/home-page.component';
import { CreatorViewComponent } from './Pages/HomePage/CreatorView/creator-view/creator-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreatorViewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
