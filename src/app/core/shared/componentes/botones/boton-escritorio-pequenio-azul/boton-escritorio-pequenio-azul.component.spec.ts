import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEscritorioPequenioAzulComponent } from './boton-escritorio-pequenio-azul.component';

describe('BotonEscritorioPequenioAzulComponent', () => {
  let component: BotonEscritorioPequenioAzulComponent;
  let fixture: ComponentFixture<BotonEscritorioPequenioAzulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonEscritorioPequenioAzulComponent]
    });
    fixture = TestBed.createComponent(BotonEscritorioPequenioAzulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
