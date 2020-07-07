import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenEstacionesComponent } from './gen-estaciones.component';

describe('GenEstacionesComponent', () => {
  let component: GenEstacionesComponent;
  let fixture: ComponentFixture<GenEstacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenEstacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenEstacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
