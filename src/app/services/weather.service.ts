import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private ipApiUrl = 'https://api.ipify.org?format=json';

  private baseUrl = 'https://api.weatherapi.com/v1'
  private apiKey = environment.weatherApiKey

  getWeather(): object {
    let ip = '';
    this.getIp().subscribe({
      next: (res: { ip: string }) => {
        ip = res.ip
      },
      error: () => {
        console.error("Ocurrio un error al obtener la ubicacion")
      }
    })
    ip = ip || 'Mar%20del%20Plata'
    const url = this.baseUrl + '/current.json?key=' + this.apiKey + '&q=' + ip 
    this.http.get(url, { headers: { 'Content-Type': 'application/json' } }).subscribe({
      next: data => {
        return data
      },
      error: () => {
        console.error('Error al obtener los datos del clima')
      }
    })
    return {}
  }

  getIp() {
    return this.http.get<{ ip: string }>(this.ipApiUrl);
  }
}
