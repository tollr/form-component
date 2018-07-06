import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OoFormComponent } from './oo-form.component';

describe('OoFormComponent', () => {
  let component: OoFormComponent;
  let fixture: ComponentFixture<OoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
