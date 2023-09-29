import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditEnquiryPage } from './edit-enquiry.page';

describe('EditEnquiryPage', () => {
  let component: EditEnquiryPage;
  let fixture: ComponentFixture<EditEnquiryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditEnquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
