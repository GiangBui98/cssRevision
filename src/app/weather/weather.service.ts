import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';


@Injectable()

export class WeatherService {
    constructor(private http: HttpClient)  {}

    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=7d5396fa62852618725bc0e3fb9260fb&units=metric&q=' + cityName;
        return this.http.get(url)
        .toPromise()
        // .then(res => res.json)
        .then((res:any) => res.main.temp);

    }
}