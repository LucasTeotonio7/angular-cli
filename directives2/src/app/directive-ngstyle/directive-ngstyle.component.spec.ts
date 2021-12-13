import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgstyleComponent } from './directive-ngstyle.component';

describe('DirectiveNgstyleComponent', () => {
  let component: DirectiveNgstyleComponent;
  let fixture: ComponentFixture<DirectiveNgstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNgstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
