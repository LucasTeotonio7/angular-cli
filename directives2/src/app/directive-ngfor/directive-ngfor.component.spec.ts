import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveNgforComponent } from './directive-ngfor.component';

describe('DirectiveNgforComponent', () => {
  let component: DirectiveNgforComponent;
  let fixture: ComponentFixture<DirectiveNgforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveNgforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
