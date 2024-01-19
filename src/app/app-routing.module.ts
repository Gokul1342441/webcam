import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryCameraComponent } from './primary-camera/primary-camera.component';
import { MobileCameraComponent } from './mobile-camera/mobile-camera.component';

const routes: Routes = [
  { path: 'primary-camera', component: PrimaryCameraComponent },
  { path: 'mobile-camera', component: MobileCameraComponent },
  { path: '', redirectTo: '/primary-camera', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
