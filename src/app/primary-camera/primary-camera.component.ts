// src/app/primary-camera/primary-camera.component.ts

import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';

@Component({
  selector: 'app-primary-camera',
  templateUrl: './primary-camera.component.html',
  styleUrls: ['./primary-camera.component.css']
})
export class PrimaryCameraComponent implements OnInit {
  public webcamImage: WebcamImage | null = null;

  constructor() {}

  ngOnInit() {}

  public handleImage(webcamImage: WebcamImage): void {
    // Handle the image captured by the primary camera
    this.webcamImage = webcamImage;
  }

  public handleError(error: WebcamInitError): void {
    // Handle errors during webcam initialization
    console.error('Error: ', error);
  }
}
