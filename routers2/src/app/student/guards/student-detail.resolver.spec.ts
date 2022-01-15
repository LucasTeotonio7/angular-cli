import { TestBed } from '@angular/core/testing';

import { StudentDetailResolver } from './student-detail.resolver';

describe('StudentDetailResolver', () => {
  let resolver: StudentDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(StudentDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
