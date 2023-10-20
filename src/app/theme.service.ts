import { Injectable, Component} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor() {}

  toggleTheme(theme: string) {
    document.documentElement.classList.remove('Grape', 'Ocean');
    document.documentElement.classList.add(theme);
  }
}
