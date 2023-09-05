import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set1Component } from './set1.component';

describe('Set1Component', () => {
  let component: Set1Component;
  let fixture: ComponentFixture<Set1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Set1Component]
    });
    fixture = TestBed.createComponent(Set1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
