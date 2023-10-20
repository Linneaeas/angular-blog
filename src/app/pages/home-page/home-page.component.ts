import { Component, ChangeDetectorRef, OnInit} from '@angular/core';
import { ViewStateService, ViewType } from 'src/app/view-state.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentView: ViewType;
  Creator = ViewType.Creator; 
  User = ViewType.User;  

  constructor(private viewStateService: ViewStateService, private cd: ChangeDetectorRef) {
    this.currentView = this.viewStateService.getCurrentView();
  }
  
  toggleView() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
    this.cd.detectChanges(); 
  }

  ngOnInit() {
    this.viewStateService.setCurrentView(this.viewStateService.getCurrentView());
    this.currentView = this.viewStateService.getCurrentView();

  }

  get viewType() {
    return this.viewStateService.getCurrentView();
  }
}
