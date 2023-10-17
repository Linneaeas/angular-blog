import { Component } from '@angular/core';
import { CreatorViewComponent } from './Pages/HomePage/CreatorView/creator-view/creator-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blog';
  showElement: boolean = false;
  
  toggleElement() {
    this.showElement = !this.showElement;
  }
}
