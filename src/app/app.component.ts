import { Component, OnInit} from '@angular/core';
import { ViewStateService, ViewType } from './view-state.service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-blog';
  currentView: ViewType;
  currentTheme: string = 'Grape';

  
  constructor(private viewStateService: ViewStateService, private themeService: ThemeService) {
    this.currentView = this.viewStateService.getCurrentView();
  }

  toggleView() {
    this.currentView = this.currentView === ViewType.Creator ? ViewType.User : ViewType.Creator;
    this.viewStateService.setCurrentView(this.currentView);
  }

  toggleTheme() {
    if (this.currentTheme === 'Grape') {
      this.currentTheme = 'Ocean';
    } else {
      this.currentTheme = 'Grape';
    }
    this.themeService.toggleTheme(this.currentTheme);
  }

  ngOnInit() {
    this.viewStateService.setCurrentView(this.viewStateService.getCurrentView());
    this.currentView = this.viewStateService.getCurrentView();
    this.themeService.toggleTheme(this.currentTheme);
  }

  getViewButtonText(): string {
    return this.currentView === 'user' ? 'User' : 'Creator';
  }
  getThemeButtonText(): string {
    return this.currentTheme === 'Grape' ? 'Grape' : 'Ocean';
  }

  
  get viewType() {
    return ViewType;
  }
  
}
