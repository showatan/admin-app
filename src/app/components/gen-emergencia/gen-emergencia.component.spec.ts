import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEmergenciaComponent } from './gen-emergencia.component';

describe('GenEmergenciaComponent', () => {
  let component: GenEmergenciaComponent;
  let fixture: ComponentFixture<GenEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
