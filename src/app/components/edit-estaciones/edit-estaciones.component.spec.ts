import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstacionesComponent } from './edit-estaciones.component';

describe('EditEstacionesComponent', () => {
  let component: EditEstacionesComponent;
  let fixture: ComponentFixture<EditEstacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
