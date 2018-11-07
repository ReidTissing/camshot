import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebcamComponent} from './webcam/webcam.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'webcam', component: WebcamComponent },
];
