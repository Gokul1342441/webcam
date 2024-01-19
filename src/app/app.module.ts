import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WebcamModule } from 'ngx-webcam';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryCameraComponent } from './primary-camera/primary-camera.component';
import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AppComponent,
    PrimaryCameraComponent,
    MobileCameraComponent
  ],
  imports: [
    WebcamModule,
    QRCodeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
