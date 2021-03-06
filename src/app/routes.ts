import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WebcamComponent} from './webcam/webcam.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'webcam', component: WebcamComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', data: { error: 404 }, redirectTo: '/login'}
];
