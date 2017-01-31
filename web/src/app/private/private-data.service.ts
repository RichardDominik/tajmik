import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { AppComponent } from '../app.component';

@Injectable()
export class PrivateDataService {
	tokenID: string;
	options: any;

  	constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
  		this.tokenID = this.appComponent.tokenID;
    	let headers = new Headers({'Content-Type': 'application/json'});  
    	headers.append('Authorization',` ${this.tokenID}`) 
    	this.options = new RequestOptions({headers: headers});
  	}

  	getLengthOfTasks(){
  		return this.http.get('api/tasks/length', this.options)
  			.map(res => res.json())
  	}

  	getLengthOfEvents(){
  		return this.http.get('api/events/length', this.options)
  			.map(res => res.json());
  	}

}
