import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';

import { EventDataService } from './event-data.service';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css'],
  providers: [EventDataService]
})
export class EventManagerComponent {

  isLogged: boolean;
  tokenID: string;
  title: string;
  comment: string;
  done: string;
  completed: boolean;

	
  constructor(private appComponent: AppComponent, private eventdataService: EventDataService) {
  	this.isLogged = this.appComponent.isLogged;
    this.tokenID = this.appComponent.tokenID;
  }

  addEvent(form){
    this.eventdataService.addEvent(form.title, form.comment, this.tokenID, form.done, form.completed)
    .subscribe(
        res => {
            console.log('event pridany');
          }
      )
  }
}
