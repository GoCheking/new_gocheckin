import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilFormLoginComponent } from './movil-form-login.component';

describe('MovilFormLoginComponent', () => {
  let component: MovilFormLoginComponent;
  let fixture: ComponentFixture<MovilFormLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovilFormLoginComponent]
    });
    fixture = TestBed.createComponent(MovilFormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
