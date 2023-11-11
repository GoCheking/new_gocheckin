import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutExterno2Component } from './layout-externo2.component';

describe('LayoutExterno2Component', () => {
  let component: LayoutExterno2Component;
  let fixture: ComponentFixture<LayoutExterno2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutExterno2Component]
    });
    fixture = TestBed.createComponent(LayoutExterno2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
