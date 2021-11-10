import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetailComponent } from './courses-detail.component';

describe('CoursesDetailComponent', () => {
  let component: CoursesDetailComponent;
  let fixture: ComponentFixture<CoursesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
