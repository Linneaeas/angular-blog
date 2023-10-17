import { Component } from '@angular/core';
import { ViewStateService, ViewType } from "../../services/view-state.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  currentView: ViewType;

  constructor(private viewStateService: ViewStateService) {
    this.currentView = this.viewStateService.getCurrentView();
  }

  get viewType() {
    return this.viewStateService.getCurrentView();
  }
}
