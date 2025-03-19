import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent {
  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }
}
