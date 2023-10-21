import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AppComponent } from './app.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {path:"Home", component:HomePageComponent},
  {path:"About", component:AboutMeComponent},
  {path:"CreatePost", component:CreatePostComponent},
  {path:"BlogPost", component:BlogPostComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
