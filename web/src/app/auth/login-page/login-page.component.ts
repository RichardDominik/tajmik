import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

	error: string;

	constructor( private router: Router, private authService: AuthService) { }

	onSubmit(form){
		this.authService.signin(form.email, form.password) 
			.subscribe(
				res => {
					if(res.success){
						this.authService.saveToken(res.token);
						this.router.navigate(['/private']);
					} else {
						this.error = res.msg;
					}
				}
			)
	}

}
