import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LocalStorageService } from './local-storage.service';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutMeComponent,
    CreatePostComponent,
    BlogPostComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
