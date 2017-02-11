import { Component, OnInit, OnChanges, SimpleChange , Input, AfterViewInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service'
import { Subscription } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';
declare var $:JQueryStatic;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  
  isLogged: boolean;
	jwtHelper: JwtHelper = new JwtHelper();
 	token: string;
	tokenDecoded: Object;
	tokenEmail: string;
	tokenID: string;

	constructor(private router: Router, private authService: AuthService){
		this.authService.authenticateState$.subscribe(
			state => this.isLogged = state
		);

  		this.isLogged = this.authService.isAuthenticate();

		console.log(this.isLogged);
		if(this.isLogged == true){
  			this.token = localStorage.getItem('token');
  			this.tokenDecoded = this.jwtHelper.decodeToken(this.token);
  			this.tokenEmail = this.tokenDecoded['email'];
  			this.tokenID = this.tokenDecoded['_id'];
  		}
  		console.log(this.isLogged);
	}

	logout(){
		this.authService.logout();
		this.router.navigate(['/'])
	}

	ngOnChanges(){
		
	}

  ngOnInit(){
  	console.log('initialize')
  }

   ngAfterViewInit(){
  		var links = $('.navigation').find('a');
      var pull = $('#pull').hide();
      var menu = $('#nav ul');
      var menuItems = $('#nav li');
      var firstUl = $('.navigation');
      var menuHeight = menu.height();

      pull.on('click', function(e){
        e.preventDefault()
        menu.slideToggle();
      });

      var w = $(window).width();

      if(w < 770){
        pull.show();
        menu.removeClass('float-xs-left float-xs-right');
        menuItems.addClass('col-xs-12 small-menu');
        menu.addClass('small-nav');
        firstUl.addClass('small-menu-ul');
      }
  
    	links.on('click', function(e) {
        	var id = this.hash;
        	e.preventDefault();
        	$('html, body').animate({
            	scrollTop: $(id).offset().top
       		}, 500, function() {
            	window.location.hash = id;
        	});
   	 	});

    }
}
