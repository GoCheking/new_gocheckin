import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputNombreComponent } from './imput-nombre.component';

describe('ImputNombreComponent', () => {
  let component: ImputNombreComponent;
  let fixture: ComponentFixture<ImputNombreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImputNombreComponent]
    });
    fixture = TestBed.createComponent(ImputNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
