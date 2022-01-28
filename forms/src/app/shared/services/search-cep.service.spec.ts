import { TestBed } from '@angular/core/testing';

import { SearchCepService } from './search-cep.service';

describe('SearchCepService', () => {
  let service: SearchCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
