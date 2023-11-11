import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PequenioComponent } from './pequenio.component';

describe('PequenioComponent', () => {
  let component: PequenioComponent;
  let fixture: ComponentFixture<PequenioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PequenioComponent]
    });
    fixture = TestBed.createComponent(PequenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
