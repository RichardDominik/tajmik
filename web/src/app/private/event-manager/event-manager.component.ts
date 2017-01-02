import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

import { Event } from './event';
import { EventDataService } from './event-data.service';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css'],
  providers: [EventDataService]
})
export class EventManagerComponent {

  isLogged: boolean;
  newEvent: Event = new Event();
	
  constructor(private appComponent: AppComponent, private eventdataService: EventDataService) {
  	this.isLogged = this.appComponent.isLogged;
  }

  addEvent() {
    this.eventdataService.addEvent(this.newEvent);
    this.newEvent = new Event();
  }

  togglEventComplete(event){
    this.eventdataService.toogleEventComplete(event);
  }

  removeEvent(event){
    this.eventdataService.deleteEventById(event.id);
  }

  get events(){
    return this.eventdataService.getAllEvents();
  }
}
