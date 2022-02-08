import { TestBed } from '@angular/core/testing';

import { CheckEmailService } from './check-email.service';

describe('CheckEmailService', () => {
  let service: CheckEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
