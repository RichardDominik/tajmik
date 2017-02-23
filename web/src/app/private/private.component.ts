import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { AppComponent } from '../app.component';
import { ProfileService } from './profile/profile.service';
import { WeatherService } from './weather/weather.service';
import { ChartDataService } from './chart/chart-data.service';
import { EventDataService } from './event-manager/event-data.service';
import { TaskDataService } from './task-manager/task-data.service';
import { PrivateDataService } from './private-data.service'


@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [ProfileService, WeatherService, ChartDataService, EventDataService, TaskDataService, PrivateDataService]

})

@Injectable()
export class PrivateComponent implements OnInit {

    isLogged: boolean;
    res: any;
    taskLength: number;
    eventLength: number;
    incompletedEvents: number;
    cityRes: any;
    city: string;
    forecast: any;
    mainInfo: any;
    eventRes: any;
    title: string;
    done: any;
    completed: boolean;
    taskRes: any;
    taskTitle: string;
    taskCompleted: boolean;

  	constructor(
      private appComponent: AppComponent, 
      private chartService: ChartDataService, 
      private dataService: PrivateDataService,
      private weatherService: WeatherService,
      private eventdataService: EventDataService,
      private taskdataService: TaskDataService,
      private profileService: ProfileService
      ) {
      this.isLogged = this.appComponent.isLogged;
    }

    removeTask(taskID){
    this.taskdataService.removeTasks(taskID)
      .subscribe(
        res => {
          location.reload();
          }
        )
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

  	ngOnInit() {
  		this.chartService.getIncompletedEvents()
        .subscribe( res => {
          this.res = res;
          if(this.res !== undefined){
            this.incompletedEvents = res;
          }
        });

      this.dataService.getLengthOfTasks()
        .subscribe(res => {
           this.res = res;
           if(this.res !== undefined){
             this.taskLength = res;
           }
        });

      this.dataService.getLengthOfEvents()
        .subscribe(res => {
          this.res = res;
          if(this.res !== undefined){
            this.eventLength = res;
          }
        });

     this.eventdataService.getEvents()
       .subscribe(res => {
         this.eventRes = res;
         if(this.eventRes !== undefined){
              this.title = this.eventRes.title;
              this.done = this.eventRes.done;
              this.completed = this.eventRes.completed;
           }
       })

     this.taskdataService.getTasks()
       .subscribe(res => {
         this.taskRes = res;
         if(this.taskRes !== undefined) {
           this.taskTitle = this.taskRes.title;
           this.taskCompleted = this.taskRes.completed;
         }
       })

     this.profileService.getProfile()
        .subscribe(res => {
             this.cityRes = res[0];
             if(this.cityRes !== undefined){
                this.city = this.cityRes.city;
                this.weatherService.getWeather(this.city)
                  .subscribe(forecast => {
                    console.log(forecast);
                    this.mainInfo = forecast;
                    this.forecast = forecast.list[0];
                });
             }
        }); 
  	}

}
