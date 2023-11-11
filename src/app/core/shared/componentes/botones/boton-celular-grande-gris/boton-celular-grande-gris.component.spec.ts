import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCelularGrandeGrisComponent } from './boton-celular-grande-gris.component';

describe('BotonCelularGrandeGrisComponent', () => {
  let component: BotonCelularGrandeGrisComponent;
  let fixture: ComponentFixture<BotonCelularGrandeGrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonCelularGrandeGrisComponent]
    });
    fixture = TestBed.createComponent(BotonCelularGrandeGrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
