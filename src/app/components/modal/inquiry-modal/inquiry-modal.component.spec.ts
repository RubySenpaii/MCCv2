import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryModalComponent } from './inquiry-modal.component';

describe('InquiryModalComponent', () => {
  let component: InquiryModalComponent;
  let fixture: ComponentFixture<InquiryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquiryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquiryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
