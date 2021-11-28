import { TestBed } from '@angular/core/testing';

import { DirectiveNgifService } from './directive-ngif.service';

describe('DirectiveNgifService', () => {
  let service: DirectiveNgifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectiveNgifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
