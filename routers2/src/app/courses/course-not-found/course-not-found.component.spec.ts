import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNotFoundComponent } from './course-not-found.component';

describe('CourseNotFoundComponent', () => {
  let component: CourseNotFoundComponent;
  let fixture: ComponentFixture<CourseNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
