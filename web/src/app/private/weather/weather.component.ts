import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

	isLogged: boolean;
  city: string;
  location: any;
  forecast: any;
  allForecast: any;

	
  	constructor(private appComponent: AppComponent, private weatherService: WeatherService) {
  		this.isLogged = this.appComponent.isLogged;
      this.weatherService = weatherService;
      this.city = 'Vranov nad Toplou';
      this.location;
      this.forecast;
      this.allForecast;
   	}

  	ngOnInit() {
      this.weatherService.getWeather(this.city)
          .subscribe(forecast => {
            this.location = forecast.city;
            this.forecast = forecast.list[0];
            this.allForecast = forecast.list;
          });
  	}
}

