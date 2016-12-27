import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

	isLogged: boolean;

	jwtHelper: JwtHelper = new JwtHelper();
	token: string;
	tokenDecoded: Object;
	tokenEmail: string;

  	constructor(private authService: AuthService) {}

  	ngOnInit() {
  		this.isLogged = this.authService.isAuthenticate();
  		if(this.isLogged){
  			this.token = localStorage.getItem('token');
  			this.tokenDecoded = this.jwtHelper.decodeToken(this.token);
  			this.tokenEmail = this.tokenDecoded['email'];
  		}
  	}

}