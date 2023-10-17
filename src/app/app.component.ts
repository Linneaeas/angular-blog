import { Component } from '@angular/core';
import { ViewStateService, ViewType } from './Services/view-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
  currentView: ViewType;

  
  constructor(private viewStateService: ViewStateService) {
    this.currentView = this.viewStateService.getCurrentView();
  }

  toggleElement() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }

  get viewType() {
    return ViewType;
  }
  
}
