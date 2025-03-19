import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-card',
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css'
})
export class WeatherCardComponent implements OnInit{
  constructor(private weatherService: WeatherService) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weather: any = {}

  ngOnInit(): void {
    //this.getWeather()
    console.log('WeatherCardComponent initialized')
  }

  getWeather() {
    this.weather = this.weatherService.getWeather()
  }
}
