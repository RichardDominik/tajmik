import { Component, OnInit, Input } from '@angular/core';
import 'chart.js' 
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartDataService } from './chart-data.service';

import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers: [ChartDataService]
})

export class ChartComponent implements OnInit{

	isLogged: boolean;
	completedTasks: number;
	incompletedTasks: number;
	completedEvents: number;
	incompletedEvents: number;
	taskRes: any;
	eventRes: any;

	constructor(private appComponent: AppComponent, private chartService: ChartDataService) {
  		this.isLogged = this.appComponent.isLogged;
  	}

	private colors = [
		{
			backgroundColor: ["#20D7AF", "#E81D62"]
		}
	];

	private taskLabels = ['Complete Tasks', 'Incomplete Tasks'];

	private eventLabels = ['Complete Events', 'Incomplete Events'];

	ngOnInit(){
		this.chartService.getCompletedTasks()
			.subscribe(res => {
				this.taskRes = res;
				if(this.taskRes !== undefined){
					this.completedTasks = res;
				}
			});

		this.chartService.getIncompletedTasks()
			.subscribe(res => {
				this.taskRes = res;
				if(this.taskRes !== undefined){
					this.incompletedTasks = res;
				}
			});

		this.chartService.getCompletedEvents()
			.subscribe(res => {
				this.eventRes = res;
				if(this.eventRes !== undefined){
					this.completedEvents = res;
				}
			});

		this.chartService.getIncompletedEvents()
			.subscribe(res => {
				this.eventRes = res;
				if(this.eventRes !== undefined){
					this.incompletedEvents = res;
				}
			});
	}
}
