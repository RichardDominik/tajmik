import { Component, OnInit } from '@angular/core';
import { MainPageService } from './main-page.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainPageService]
})
export class MainPageComponent implements OnInit{

	users: number;

	constructor(private mainPageService: MainPageService) { }

  	ngOnInit(){
  		this.mainPageService.getUsersCount()
  			.subscribe(res => {
  			this.users = res;
  		})
  	}
  	
}