import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCelularGrandeAzulComponent } from './boton-celular-grande-azul.component';

describe('BotonCelularGrandeAzulComponent', () => {
  let component: BotonCelularGrandeAzulComponent;
  let fixture: ComponentFixture<BotonCelularGrandeAzulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonCelularGrandeAzulComponent]
    });
    fixture = TestBed.createComponent(BotonCelularGrandeAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
