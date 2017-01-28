import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subscription } from 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';

import { AppComponent } from '../app.component';
import { PrivateDataService } from './private-data.service'

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css'],
  providers: [PrivateDataService]

})

@Injectable()
export class PrivateComponent implements OnInit {

    isLogged: boolean;

  	constructor(private appComponent: AppComponent) {
      this.isLogged = this.appComponent.isLogged;
    }

  	ngOnInit() {
  		
  	}

}
