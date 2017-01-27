import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { WeatherService } from './weather.service';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService, ProfileService]
})

export class WeatherComponent implements OnInit {

	isLogged: boolean;
  city: string;
  location: any;
  forecast: any;
  allForecast: any;
  res: any;

  	constructor(private appComponent: AppComponent, private weatherService: WeatherService, private profileService: ProfileService) {
  		this.isLogged = this.appComponent.isLogged;
      this.weatherService = weatherService;
      this.location;
      this.forecast;
      this.allForecast;
   	}

  	ngOnInit() {
      this.profileService.getProfile()
        .subscribe(res => {
             this.res = res[0];
             if(res[0] !== undefined){
                this.city = res[0].city;
                this.weatherService.getWeather(this.city)
                  .subscribe(forecast => {
                    this.location = forecast.city;
                    this.forecast = forecast.list[0];
                    this.allForecast = forecast.list;
                });
             }
        }); 
  	}
}

