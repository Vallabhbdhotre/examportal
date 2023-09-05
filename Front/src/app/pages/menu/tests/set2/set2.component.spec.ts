import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Set2Component } from './set2.component';

describe('Set2Component', () => {
  let component: Set2Component;
  let fixture: ComponentFixture<Set2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Set2Component]
    });
    fixture = TestBed.createComponent(Set2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
