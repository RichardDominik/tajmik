import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainPageService } from './main-page.service';

declare var $:JQueryStatic;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [MainPageService]
})
export class MainPageComponent implements OnInit, AfterViewInit{

	users: number;

	constructor(private mainPageService: MainPageService) { }

  	ngOnInit(){
  		this.mainPageService.getUsersCount()
  			.subscribe(res => {
  			this.users = res;
  		})
  	}

    ngAfterViewInit(){
      var link = $('.main-content').find('a');

      link.on('click', function(event) {
          var id = this.hash;
          event.preventDefault();
          $('html, body').animate({
              scrollTop: $(id).offset().top
           }, 500, function() {
              window.location.hash = id;
          });
        });
    }
}