import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { PrivateComponent } from './private/private.component';
import { SignUpComponentComponent } from './auth/sign-up-component/sign-up-component.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { ProfileComponent } from './private/profile/profile.component';
import { TaskManagerComponent } from './private/task-manager/task-manager.component';
import { EventManagerComponent } from './private/event-manager/event-manager.component';



export const router: Routes = [
	{ path: '', component: MainPageComponent },
	{ path: 'private', component: PrivateComponent },
	{ path: 'signup', component: SignUpComponentComponent },
	{ path: 'signin', component: LoginPageComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'task_manager', component: TaskManagerComponent },
	{ path: 'event_manager', component: EventManagerComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
