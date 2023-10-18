import { Injectable } from '@angular/core';

export enum ViewType {
  Creator = 'creator',
  User = 'user'
}

@Injectable({
  providedIn: 'root'
})

export class ViewStateService {
  private currentView: ViewType = ViewType.User;
  

  getCurrentView(): ViewType {
    return this.currentView;
  }

  setCurrentView(view: ViewType) {
    this.currentView = view;
  }
  
  constructor() { }
}
