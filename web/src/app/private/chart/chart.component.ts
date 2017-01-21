import { Component } from '@angular/core';
import 'chart.js' 
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],

})

export class ChartComponent {

	isLogged: boolean;

	constructor(private appComponent: AppComponent) {
  		this.isLogged = this.appComponent.isLogged;
  	}

	private colors = [
		{
			 backgroundColor: ["#20D7AF", "#E81D62"]
		}
	];

	private taskDatasets = [
		{
			data: [25,3]
		}
	];

	private taskLabels = ['Complete Tasks', 'Incomplete Tasks'];

	private eventDatasets = [
    	{
     	 	data: [15,8]
    	}
  	];

	private eventLabels = ['Complete Events', 'Incomplete Events'];

}
