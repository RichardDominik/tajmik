import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent implements OnInit {

	isLogged: boolean;
	
  	constructor(private appComponent: AppComponent) {
  		this.isLogged = this.appComponent.isLogged;
   	}

  	ngOnInit() {
  	}
}
