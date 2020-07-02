import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposEmergenciaComponent } from './tipos-emergencia.component';

describe('TiposEmergenciaComponent', () => {
  let component: TiposEmergenciaComponent;
  let fixture: ComponentFixture<TiposEmergenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposEmergenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
