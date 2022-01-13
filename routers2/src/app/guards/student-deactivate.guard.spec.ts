import { TestBed } from '@angular/core/testing';

import { StudentDeactivateGuard } from './student-deactivate.guard';

describe('StudentDeactivateGuard', () => {
  let guard: StudentDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
