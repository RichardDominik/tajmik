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

   constructor(private profileService: ProfileService, private appComponent: AppComponent) {
      this.isLogged = this.appComponent.isLogged;
      this.tokenEmail= this.appComponent.tokenEmail;
      this.tokenID = this.appComponent.tokenID;
    };

    addProfile(form){
        this.profileService.addProfile(form.firstName , form.lastName, form.city, form.country, this.tokenID)
        .subscribe(
        res => {
          if(res.success){ 
            console.log('uspesne');
          }else{
            console.log(this.tokenID);
          }
        }
      )
    };

    getProfile(){
      this.profileService.getProfile()
      .subscribe(
        res => {
          if(res.success){ 
            console.log('uspesne');
          }else{
            console.log('neuspesne');
          }
        })
    };

    ngOnInit() {
      console.log(this.isLogged);
    };
}
