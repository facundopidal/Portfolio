import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css'
})
export class ThemeSwitchComponent implements OnInit {
  isDarkTheme: boolean = false;

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
    if (this.isDarkTheme) {
      document.querySelector('html')?.classList.add('dark');
    }
  }

  toggleTheme(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      document.querySelector('html')?.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
