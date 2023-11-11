import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEscritorioPequenioGrisComponent } from './boton-escritorio-pequenio-gris.component';

describe('BotonEscritorioPequenioGrisComponent', () => {
  let component: BotonEscritorioPequenioGrisComponent;
  let fixture: ComponentFixture<BotonEscritorioPequenioGrisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotonEscritorioPequenioGrisComponent]
    });
    fixture = TestBed.createComponent(BotonEscritorioPequenioGrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
