import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import { EventDataService } from './event-data.service';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css'],
  providers: [EventDataService]
})
export class EventManagerComponent implements OnInit {

  isLogged: boolean;
  tokenID: string;
  title: string;
  comment: string;
  done: string;
  completed: boolean;
  res: any;

	
  constructor(private appComponent: AppComponent, private eventdataService: EventDataService) {
  	this.isLogged = this.appComponent.isLogged;
    this.tokenID = this.appComponent.tokenID;
  }

  addEvent(form){
    this.eventdataService.addEvent(form.title, form.comment, this.tokenID, form.done, form.completed)
    .subscribe(
        res => {
            location.reload();
          }
      )
  }

  ngOnInit(){
    this.eventdataService.getEvents()
    .subscribe(res => {
      this.res = res;
      if(this.res !== undefined){
        this.title = this.res.title;
        this.comment = this.res.comment;
        this.done = this.res.done;
        this.completed = this.res.completed;
        console.log(this.res.done);
      }
    });
  }
}
