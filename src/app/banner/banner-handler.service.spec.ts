import { TestBed } from '@angular/core/testing';

import { BannerHandlerService } from './banner-handler.service';

describe('BannerHandlerService', () => {
  let service: BannerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BannerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
