import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

	isLogged: boolean;

  	constructor(private appComponent: AppComponent) {
  		this.isLogged = this.appComponent.isLogged;
   	}

  	ngOnInit() {
  	}
}
