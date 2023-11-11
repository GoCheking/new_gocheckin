import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputCheckboxComponent } from './imput-checkbox.component';

describe('ImputCheckboxComponent', () => {
  let component: ImputCheckboxComponent;
  let fixture: ComponentFixture<ImputCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImputCheckboxComponent]
    });
    fixture = TestBed.createComponent(ImputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
