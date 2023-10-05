import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConformationComponent } from './emailConformation.component';

describe('EmailConformationComponent', () => {
  let component: EmailConformationComponent;
  let fixture: ComponentFixture<EmailConformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailConformationComponent]
    });
    fixture = TestBed.createComponent(EmailConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
