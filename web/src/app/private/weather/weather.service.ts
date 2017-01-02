import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
	apiKey: string;
	weatherUrl: string;

 	constructor(@Inject(Http) private http: Http) {
  		this.http = http;
  		this.apiKey = '24d021f2f41006ac5f062da3896dfd8c';
  		this.weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=json&appid='+this.apiKey+''
  		console.log('Ahojda chcem fungovat!');
  	}

  	getWeather() {
  		return this.http.get(this.weatherUrl)
  				.map(res => res.json());
  	}
}
