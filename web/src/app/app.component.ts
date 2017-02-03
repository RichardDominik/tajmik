import { Component, OnInit, OnChanges, SimpleChange , Input} from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service'
import { Subscription } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges {
  
  	@Input('isLogged') isLogged: boolean;
	jwtHelper: JwtHelper = new JwtHelper();
 	@Input() token: string;
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
}
