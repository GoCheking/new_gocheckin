import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPrincipalComponent } from './img-principal.component';

describe('ImgPrincipalComponent', () => {
  let component: ImgPrincipalComponent;
  let fixture: ComponentFixture<ImgPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgPrincipalComponent]
    });
    fixture = TestBed.createComponent(ImgPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
