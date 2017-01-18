//angular files
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
import 'rxjs/add/operator/map';


import { AuthHttp, AuthConfig } from 'angular2-jwt';
//local files
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { SignUpComponentComponent } from './auth/sign-up-component/sign-up-component.component';
import { PrivateComponent } from './private/private.component';
import { ProfileComponent } from './private/profile/profile.component';
import { TaskManagerComponent } from './private/task-manager/task-manager.component';
import { EventManagerComponent } from './private/event-manager/event-manager.component';
import { WeatherComponent } from './private/weather/weather.component';
import { ChartComponent } from './private/chart/chart.component';

//providers
import { AuthService } from './auth/auth.service';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    SignUpComponentComponent,
    PrivateComponent,
    ProfileComponent,
    TaskManagerComponent,
    EventManagerComponent,
    WeatherComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ChartsModule,
    ReactiveFormsModule,
    HttpModule,
    routes
  ],
  providers: [
    AuthHttp,
    AuthService,
    AUTH_PROVIDERS 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
