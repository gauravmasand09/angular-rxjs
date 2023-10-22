import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular16Component } from './angular16.component';

describe('Angular16Component', () => {
  let component: Angular16Component;
  let fixture: ComponentFixture<Angular16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Angular16Component]
    });
    fixture = TestBed.createComponent(Angular16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
