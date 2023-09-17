import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  temp = null;
  constructor(private weatherService: WeatherService) { }
  
  
  ngOnInit() {
    // this.weatherService.getTemp('HaNoi')
    // .then(temp => console.log(temp))
    // .then(err => console.log(err));
    
  }
  getWeather() {
    this.weatherService.getTemp(this.txtCityName)
    .then(temp => {
      this.cityName = this.txtCityName;
      this.temp = temp;
    })
    .catch(err => console.log(err));
  }
  
}
