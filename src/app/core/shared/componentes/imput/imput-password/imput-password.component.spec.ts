import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPasswordComponent } from './imput-password.component';

describe('ImputPasswordComponent', () => {
  let component: ImputPasswordComponent;
  let fixture: ComponentFixture<ImputPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImputPasswordComponent]
    });
    fixture = TestBed.createComponent(ImputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
