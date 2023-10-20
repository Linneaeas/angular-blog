import { Component,  OnInit} from '@angular/core';
import { ViewStateService, ViewType } from 'src/app/view-state.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/local-storage.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentView!: ViewType;
  Creator = ViewType.Creator; 
  User = ViewType.User;  
  posts: any[] = []; 

  constructor(private viewStateService: ViewStateService, private router: Router, private localStorageService: LocalStorageService) {
    this.viewStateService.currentView$.subscribe(view => {
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
  }
  createNewPost() {
    this.router.navigate(['/CreatePost']);
  }
  get viewType() {
    return this.viewStateService.getCurrentView();
  }
  getSavedPostData() {
    return this.localStorageService.get('posts');
  }
}
