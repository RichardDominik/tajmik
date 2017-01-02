import { Injectable } from '@angular/core';
import { Event } from './event';

@Injectable()
export class EventDataService {

	lastId: number = 0;

	events: Event[] = [];

  	constructor() { }

  	addEvent(event: Event): EventDataService {
  		if(!event.id){
  			event.id = ++this.lastId;
  		}
  		this.events.push(event);
  		return this;
  	}

  	deleteEventById(id: number): EventDataService {
  		this.events = this.events
  			.filter(event => event.id !== id);
  			return this;
  	}

  	updateEventById(id: number, values: Object = {}): Event {
  		let event = this.getEventById(id);
  		if(!event) {
  			return null;
  		}
  		Object.assign(event, values);
  		return event;
  	}

  	getAllEvents(): Event[] {
  		return this.events;
  	}

  	getEventById(id: number): Event {
  		return this.events
  			.filter(event => event.id === id)
  			.pop();
  	}

  	toogleEventComplete(event: Event){
  		let updateEvent = this.updateEventById(event.id, {
  			complete: !event.complete
  		});

  		return updateEvent;
  	}
}
