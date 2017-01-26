import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { AppComponent } from '../../app.component';

@Injectable()
export class ProfileService {

  tokenID: string;
  options: any;

  constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
    this.tokenID = this.appComponent.tokenID;
    let headers = new Headers({'Content-Type': 'application/json'});  
    headers.append('Authorization',` ${this.tokenID}`) 
    this.options = new RequestOptions({headers: headers});
  }

  addProfile(firstName: any, lastName: any, city: string, country: string, creator: any): Observable<any>{
  	return this.http.post('api/profile', {
      firstName: firstName,
      lastName: lastName,
      city:  city,
      country: country,
      creator: creator
  	})
  	.map(res => res.json())
		.catch(error => {
			return Observable.throw(error.json());
		});
  }

  getProfile() {
    return this.http.get('api/profile', this.options)
    .map(res => res.json());
  }
}
