import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})

export class ProfileComponent implements OnInit {

	isLogged: boolean;
	tokenEmail: string;
  tokenID: string;
  firstName: string;
  lastName: string ;
  city: string;
  country: string;
  res: any;

   constructor(private profileService: ProfileService, private appComponent: AppComponent) {
      this.isLogged = this.appComponent.isLogged;
      this.tokenEmail= this.appComponent.tokenEmail;
      this.tokenID = this.appComponent.tokenID;
    };

    addProfile(form){
        this.profileService.addProfile(form.firstName , form.lastName, form.city, form.country, this.tokenID)
        .subscribe(
        res => {
            location.reload();
          }
      )
    };

    ngOnInit() {
      this.profileService.getProfile()
      .subscribe(res => {
        this.res = res[0];
        if(res[0] !== undefined){
            this.firstName = res[0].firstName;
            this.lastName = res[0].lastName;
            this.city = res[0].city;
            this.country = res[0].country;
        }
      });
      console.log(this.isLogged);
    };
}
