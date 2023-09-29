import { TestBed } from '@angular/core/testing';

import { NotifyHandlerService } from './notify-handler.service';

describe('NotifyHandlerService', () => {
  let service: NotifyHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
