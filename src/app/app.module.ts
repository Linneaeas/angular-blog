import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    CreatePostComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
