import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit{

  currentTime?: string

  ngOnInit(): void {
    this.getClientTime()
    setInterval(() => {this.getClientTime()}, 1000)
  }

  getClientTime(): void {
    const currentDate = new Date(); 
    this.currentTime = currentDate.toLocaleTimeString(); 
  }
}
