import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../../app.component';

import { TaskDataService } from './task-data.service';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css'],
  providers: [TaskDataService]
})

export class TaskManagerComponent implements OnInit {

  isLogged: boolean;
  tokenID: string;
  title: string;
  completed: boolean;
  res: any;

  constructor(private appComponent: AppComponent, private taskdataService: TaskDataService) {
  	this.isLogged = this.appComponent.isLogged;
    this.tokenID = this.appComponent.tokenID;
   }

  addTask(form){
    this.taskdataService.addTask(form.title, form.completed, this.tokenID)
      .subscribe(
        res => {
          location.reload()
        }
       )
  }

  removeTask(taskID){
    this.taskdataService.removeTasks(taskID)
      .subscribe(
        res => {
          location.reload();
        }
        )
  }

   ngOnInit(){
    this.taskdataService.getTasks()
    .subscribe(res => {
      this.res = res;
      if(this.res !== undefined){
        this.title = this.res.title;
        this.completed = this.res.completed;
      }
    });
   }

   changeValue(newValue, taskID){
     this.taskdataService.updateTask(taskID, newValue)
     .subscribe(
        res => {
          if(!res){
            console.log('error');
          }
        }
       )
   }
  
}
