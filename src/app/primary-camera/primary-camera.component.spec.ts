import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCameraComponent } from './primary-camera.component';

describe('PrimaryCameraComponent', () => {
  let component: PrimaryCameraComponent;
  let fixture: ComponentFixture<PrimaryCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrimaryCameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
