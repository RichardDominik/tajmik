import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
	apiKey: string;
	weatherUrl: string;
  apiUser: string;

 	constructor(@Inject(Http) private http: Http) {
  		this.http = http;
  		this.apiKey = '24d021f2f41006ac5f062da3896dfd8c';
  		this.weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?'
      this.apiUser = ',us&mode=json&appid='+this.apiKey+'';
  	}

  	getWeather(city) {
  		return this.http.get(this.weatherUrl + 'q= '+ city + this.apiUser)
  				.map(res => res.json());
  	}
}
