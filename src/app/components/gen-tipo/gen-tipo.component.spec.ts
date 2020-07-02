import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenTipoComponent } from './gen-tipo.component';

describe('GenTipoComponent', () => {
  let component: GenTipoComponent;
  let fixture: ComponentFixture<GenTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
