import { Component, OnInit } from '@angular/core';
import { ViewStateService, ViewType } from './view-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-blog';
  currentView: ViewType;

  
  constructor(private viewStateService: ViewStateService) {
    this.currentView = this.viewStateService.getCurrentView();
  }

  toggleView() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }
  
  ngOnInit() {
    this.viewStateService.setCurrentView(this.viewStateService.getCurrentView());
    this.currentView = this.viewStateService.getCurrentView();
  }
  
  get viewType() {
    return ViewType;
  }
  
}
