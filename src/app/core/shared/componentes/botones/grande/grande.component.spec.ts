import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandeComponent } from './grande.component';

describe('GrandeComponent', () => {
  let component: GrandeComponent;
  let fixture: ComponentFixture<GrandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrandeComponent]
    });
    fixture = TestBed.createComponent(GrandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
