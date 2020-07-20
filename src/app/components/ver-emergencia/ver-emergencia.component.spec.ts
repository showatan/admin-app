import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEmergenciaComponent } from './ver-emergencia.component';

describe('VerEmergenciaComponent', () => {
  let component: VerEmergenciaComponent;
  let fixture: ComponentFixture<VerEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
