import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	isLogged: boolean;
	
  	constructor(private appComponent: AppComponent) {
  		this.isLogged = this.appComponent.isLogged;
   	}

  	ngOnInit() {
  	}
}
