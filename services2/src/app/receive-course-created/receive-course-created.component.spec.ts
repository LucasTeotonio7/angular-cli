import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCourseCreatedComponent } from './receive-course-created.component';

describe('ReceiveCourseCreatedComponent', () => {
  let component: ReceiveCourseCreatedComponent;
  let fixture: ComponentFixture<ReceiveCourseCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCourseCreatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveCourseCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
