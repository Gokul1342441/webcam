import { Component } from '@angular/core';
import { WebcamImage, WebcamInitError } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public webcamImage: WebcamImage | null = null;
  public errors: WebcamInitError[] = [];
  public trigger$: Subject<void> = new Subject<void>();

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }
}
