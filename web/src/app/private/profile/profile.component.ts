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
        if(this.res !== undefined){
            this.firstName = this.res.firstName;
            this.lastName = this.res.lastName;
            this.city = this.res.city;
            this.country = this.res.country;
        }
      });
      console.log(this.isLogged);
    };
}
