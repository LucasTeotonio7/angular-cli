import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleNgContentComponent } from './example-ng-content.component';

describe('ExampleNgContentComponent', () => {
  let component: ExampleNgContentComponent;
  let fixture: ComponentFixture<ExampleNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleNgContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
