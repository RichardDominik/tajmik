import { Injectable, Inject  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AppComponent } from '../../app.component';


import { Task } from './task' 

@Injectable()
export class TaskDataService {
  	tokenID: string;
  	options: any;

  	constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
    	this.tokenID = this.appComponent.tokenID;
    	let headers = new Headers({'Content-Type': 'application/json'});  
    	headers.append('Authorization',` ${this.tokenID}`) 
    	this.options = new RequestOptions({headers: headers});
  	}

	lastId: number = 0;

	tasks: Task[] = [];


  	addTask(task: Task): TaskDataService {
  		if(!task.id){
  			task.id = ++this.lastId;
  		}
  		this.tasks.push(task);
  		return this;
  	}

  	deleteTaskById(id: number): TaskDataService {
  		this.tasks = this.tasks
  			.filter(task => task.id !== id);
  			return this;
  	}

	updateTaskById(id: number, values: Object = {}): Task {
		let task = this.getTaskById(id);
		if (!task) {
			return null;
		}
		Object.assign(task, values);
		return task;
	}  	

	getAllTasks(): Task[] {
		return this.tasks;
	}

	getTaskById(id: number): Task {
		return this.tasks
			.filter(task => task.id === id)
			.pop();
	}

	toggleTaskComplete(task: Task){
		let updateTask = this.updateTaskById(task.id, {
			complete: !task.complete
		});

		return updateTask;
	}

	getTasks(){
		return this.http.get('/api/tasks', this.options)
			.map(res => res.json());
	}

}
