import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';


@Injectable()
export class ProfileService {

  constructor(@Inject(Http) private http: Http) { }
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

  getProfile(creator: any) {
    return this.http.get('api/profile', {
      headers: creator
    })
    .map(res => res.json());
  }
}
