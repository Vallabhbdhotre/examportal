import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTestsComponent } from './completed-tests.component';

describe('CompletedTestsComponent', () => {
  let component: CompletedTestsComponent;
  let fixture: ComponentFixture<CompletedTestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedTestsComponent]
    });
    fixture = TestBed.createComponent(CompletedTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
