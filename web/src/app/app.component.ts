import { Component, OnInit } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service'
import { Subscription } from 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
	isLogged: boolean;

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
  	}	
}
