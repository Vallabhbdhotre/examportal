import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set4Component } from './set4.component';

describe('Set4Component', () => {
  let component: Set4Component;
  let fixture: ComponentFixture<Set4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Set4Component]
    });
    fixture = TestBed.createComponent(Set4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
