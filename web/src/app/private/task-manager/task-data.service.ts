import { Injectable, Inject  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AppComponent } from '../../app.component';

@Injectable()
export class TaskDataService {
  	tokenID: string;
  	options: any;
    taskOptions: any;

  	constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
    	this.tokenID = this.appComponent.tokenID;
    	let headers = new Headers({'Content-Type': 'application/json'});  
    	headers.append('Authorization',` ${this.tokenID}`) 
    	this.options = new RequestOptions({headers: headers});
  	}

	
  	addTask(title: string, completed: boolean, creator:any): Observable<any>{
  		return this.http.post('api/tasks', {
  			title: title,
  			completed: completed,
  			creator: creator
  		})
  		.map(res => res.json())
  		.catch(error => {
  			return Observable.throw(error.json()); 
  		})
  	}

  	getTasks(){
  		return this.http.get('api/tasks', this.options)
  			.map(res => res.json());
  	}

    removeTasks(taskID): Observable<any>{
      let header = new Headers({'Content-Type': 'application/json'}); 
      header.append('taskID',` ${taskID}`)
      this.taskOptions = new RequestOptions({headers: header});
      return this.http.post('api/task/remove',{}, this.taskOptions)
       .map(res => res.json())
        .catch(error => {
          return Observable.throw(error.json()); 
        })
    }

    updateTask(taskID, newValue): Observable<any>{
      let header = new Headers({'Content-Type': 'application/json'}); 
      header.append('taskID',` ${taskID}`)
      this.taskOptions = new RequestOptions({headers: header});
      return this.http.post('api/task/update', {
        completed: newValue
      }, this.taskOptions)
       .map(res => res.json())
        .catch(error => {
          return Observable.throw(error.json()); 
        })
    }
}
