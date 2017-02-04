import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainPageService {

  constructor(@Inject(Http) private http: Http) {
  }

  getUsersCount(){
  	return this.http.get('api/users/count')
  		.map(res => res.json())
  }
}
