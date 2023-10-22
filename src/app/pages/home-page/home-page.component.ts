import { Component, OnInit } from '@angular/core';
import { ViewStateService, ViewType } from 'src/app/view-state.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';
import { Post } from 'src/app/post';
import { Creator } from 'src/app/creator';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentView!: ViewType;
  Creator = ViewType.Creator;
  User = ViewType.User;
  posts: Post[] = [];
  creatorInfo: Creator = {
    firstName: '',
    lastName: '',
    body: '',
    imageUrl: ''
  };
  

  constructor(
    private viewStateService: ViewStateService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.viewStateService.currentView$.subscribe((view) => {
      this.currentView = view;
    });
  }

  toggleView() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }

  ngOnInit() {
    this.viewStateService.setCurrentView(this.viewStateService.getCurrentView());
    this.currentView = this.viewStateService.getCurrentView();
    this.posts = this.getSavedPostData() || [];
    const storedCreatorData = this.localStorageService.get('creatorData');
    if (storedCreatorData) {
      this.creatorInfo = { ...storedCreatorData }; 
    }
  }

  createNewPost() {
    this.router.navigate(['/CreatePost']);
  }

  navigateToPost(postId: string) {
    this.router.navigate(['/BlogPost', postId]);
  }

  get viewType() {
    return this.viewStateService.getCurrentView();
  }

  getSavedPostData() {
    return this.localStorageService.get('posts');
  }
}

