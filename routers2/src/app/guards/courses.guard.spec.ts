import { TestBed } from '@angular/core/testing';

import { CoursesGuard } from './courses.guard';

describe('CoursesGuard', () => {
  let guard: CoursesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CoursesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
