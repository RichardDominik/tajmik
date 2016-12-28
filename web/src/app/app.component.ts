import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service'
import { Subscription } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
	isLogged: boolean;

	jwtHelper: JwtHelper = new JwtHelper();
	token: string;
	tokenDecoded: Object;
	tokenEmail: string;

	constructor(private router: Router, private authService: AuthService){
		this.authService.authenticateState$.subscribe(
			state => this.isLogged = state
		);
	}

	logout(){
		this.authService.logout();
		this.router.navigate(['/'])
	}

  	ngOnInit(){
  		this.isLogged = this.authService.isAuthenticate();
  		if(this.isLogged){
  			this.token = localStorage.getItem('token');
  			this.tokenDecoded = this.jwtHelper.decodeToken(this.token);
  			this.tokenEmail = this.tokenDecoded['email'];
  		}
  	}	
}
