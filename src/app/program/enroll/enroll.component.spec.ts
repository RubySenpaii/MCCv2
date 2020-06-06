import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramEnrollComponent } from './enroll.component';

describe('ProgramEnrollComponent', () => {
  let component: ProgramEnrollComponent;
  let fixture: ComponentFixture<ProgramEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
