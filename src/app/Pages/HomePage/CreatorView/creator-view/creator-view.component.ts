import { Component } from '@angular/core';
import { ViewStateService, ViewType } from 'src/app/Services/view-state.service';

@Component({
  selector: 'app-creator-view',
  templateUrl: './creator-view.component.html',
  styleUrls: ['./creator-view.component.css']
})
export class CreatorViewComponent {
  currentView: ViewType;

  constructor(private viewStateService: ViewStateService) {
    this.currentView = this.viewStateService.getCurrentView();
  }

  get viewType() {
    return this.viewStateService.getCurrentView();
  }
}
