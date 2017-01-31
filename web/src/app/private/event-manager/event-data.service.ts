import { Injectable, Inject  } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AppComponent } from '../../app.component';

@Injectable()
export class EventDataService {

  tokenID: string;
  options: any;

  constructor(@Inject(Http) private http: Http , private appComponent: AppComponent) {
    this.tokenID = this.appComponent.tokenID;
    let headers = new Headers({'Content-Type': 'application/json'});  
    headers.append('Authorization',` ${this.tokenID}`) 
    this.options = new RequestOptions({headers: headers});
  }

  addEvent(title: string, comment: string, creator: any, done: string, completed:boolean): Observable<any>{
    return this.http.post('api/events', {
      title: title,
      comment: comment,
      creator: creator,
      done: done,
      completed: completed
    })
    .map(res => res.json())
    .catch(error => {
      return Observable.throw(error.json());
    });
  }

  getEvents(){
    return this.http.get('/api/events', this.options)
    .map(res => res.json());
  }

  putEvent(){
    return this.http.put('/api/events/:eventID', {
      
    })
  }


  
}
