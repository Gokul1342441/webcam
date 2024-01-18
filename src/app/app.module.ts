import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
