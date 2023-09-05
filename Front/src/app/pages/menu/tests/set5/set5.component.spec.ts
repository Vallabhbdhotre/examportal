import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set5Component } from './set5.component';

describe('Set5Component', () => {
  let component: Set5Component;
  let fixture: ComponentFixture<Set5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Set5Component]
    });
    fixture = TestBed.createComponent(Set5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
