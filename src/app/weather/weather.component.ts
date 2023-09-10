import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) { }
  
  
  ngOnInit() {
    this.weatherService.getTemp('Tokyo')
    .then(temp => console.log(temp))
    .then(err => console.log(err));
    
  }

}
