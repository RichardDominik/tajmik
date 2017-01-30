import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { AppComponent } from '../../app.component';

@Injectable()
export class ChartDataService {

  tokenID: string;
  options: any;

  constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
    this.tokenID = this.appComponent.tokenID;
    let headers = new Headers({'Content-Type': 'application/json'});  
    headers.append('Authorization',` ${this.tokenID}`) 
    this.options = new RequestOptions({headers: headers});
  }

  getCompletedTasks(){
  	return this.http.get('api/tasks/completed', this.options)
  		.map(res => res.json())
  }

  getIncompletedTasks(){
  	return this.http.get('api/tasks/incompleted', this.options)
  		.map(res => res.json())
  }

  getCompletedEvents(){
  	return this.http.get('api/events/completed', this.options)
  		.map(res => res.json())
  }

  getIncompletedEvents(){
  	return this.http.get('api/events/incompleted', this.options)
  		.map(res => res.json())
  }
}
