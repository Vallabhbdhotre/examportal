import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set3Component } from './set3.component';

describe('Set3Component', () => {
  let component: Set3Component;
  let fixture: ComponentFixture<Set3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Set3Component]
    });
    fixture = TestBed.createComponent(Set3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
