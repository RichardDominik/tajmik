import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	isLogged: boolean;
	tokenEmail: string;

   constructor(private appComponent: AppComponent) {
      this.isLogged = this.appComponent.isLogged;
      this.tokenEmail= this.appComponent.tokenEmail;
     }

    ngOnInit() {
    }
}
