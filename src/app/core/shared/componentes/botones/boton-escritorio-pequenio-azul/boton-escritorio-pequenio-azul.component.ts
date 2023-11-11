import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-escritorio-pequenio-azul',
  templateUrl: './boton-escritorio-pequenio-azul.component.html',
  styleUrls: ['./boton-escritorio-pequenio-azul.component.scss']
})
export class BotonEscritorioPequenioAzulComponent {
  @Input() mensaje: string = 'esc-peq-azul'; // Mensaje predeterminado "Pequeño"
}
