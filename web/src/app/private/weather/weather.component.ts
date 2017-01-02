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
	
  	constructor(private appComponent: AppComponent, private weatherService: WeatherService) {
  		this.isLogged = this.appComponent.isLogged;
      this.weatherService = weatherService;
   	}

  	ngOnInit() {
      this.weatherService.getWeather()
          .subscribe(weather => {
            console.log(weather)
          });
  	}
}
