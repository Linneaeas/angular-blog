import { Component } from '@angular/core';
import { ViewStateService, ViewType } from '../../view-state.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  currentView: ViewType;
  Creator = ViewType.Creator; 
  User = ViewType.User;  

  constructor(private viewStateService: ViewStateService) {
    this.currentView = this.viewStateService.getCurrentView();
  }
  toggleView() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }
  
  get viewType() {
    return this.viewStateService.getCurrentView();
  }
}
