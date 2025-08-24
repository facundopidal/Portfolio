import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isDarkTheme = localStorage.getItem('theme') === 'dark';
      if (this.isDarkTheme) {
        this.document.querySelector('html')?.classList.add('dark');
      }
    }
  }

  toggleTheme(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      const isChecked = (event.target as HTMLInputElement).checked;
      if (isChecked) {
        this.document.querySelector('html')?.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        this.document.querySelector('html')?.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
