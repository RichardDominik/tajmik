import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../../app.component';

import { Task } from './task';
import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  providers: [TaskDataService]
})

export class TaskManagerComponent implements OnInit {

  isLogged: boolean;
  anyData: boolean = false;
  taskId: any;
	newTask: Task = new Task();

  constructor(private appComponent: AppComponent, private taskdataService: TaskDataService) {
  	this.isLogged = this.appComponent.isLogged;
   }

   data(){
     this.anyData = true;
   }

   addTask() {
   	this.taskdataService.addTask(this.newTask);
   	this.newTask = new Task();
   }

   toggleTaskComplete(task){
   	this.taskdataService.toggleTaskComplete(task);
   }

   removeTask(task){
   	this.taskdataService.deleteTaskById(task.id);
   }

   get tasks(){
   	return this.taskdataService.getAllTasks()
   }

   ngOnInit(){
     this.taskdataService.getTasks()
       .subscribe(res => {
         console.log(res);
           this.taskId = res[0]._id;
           console.log(this.taskId);
       })
   }

}
