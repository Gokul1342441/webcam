// src/app/mobile-camera/mobile-camera.component.ts

import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-mobile-camera',
  templateUrl: './mobile-camera.component.html',
  styleUrls: ['./mobile-camera.component.css']
})
export class MobileCameraComponent implements OnInit {
  public webcamImage: WebcamImage | null = null;
  public webcamInitError: WebcamInitError | null = null;

  constructor() {}

  ngOnInit() {}

  public handleImage(webcamImage: WebcamImage): void {
    // Handle the image captured by the mobile camera
    this.webcamImage = webcamImage;
  }

  public handleError(error: WebcamInitError): void {
    // Handle errors during webcam initialization
    console.error('Error: ', error);
    this.webcamInitError = error;
  }
}
