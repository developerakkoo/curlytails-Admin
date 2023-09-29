import { TestBed } from '@angular/core/testing';

import { EnquiryHandlerService } from './enquiry-handler.service';

describe('EnquiryHandlerService', () => {
  let service: EnquiryHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
