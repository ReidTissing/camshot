import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './routes';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WebcamComponent } from './webcam/webcam.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ErrorsHandler } from './errors-handler';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ {
    provide: ErrorHandler,
    useClass: ErrorsHandler,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
