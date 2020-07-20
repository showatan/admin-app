import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageEmergenciaComponent } from './image-emergencia.component';

describe('ImageEmergenciaComponent', () => {
  let component: ImageEmergenciaComponent;
  let fixture: ComponentFixture<ImageEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
