import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-escritorio-pequenio-gris',
  templateUrl: './boton-escritorio-pequenio-gris.component.html',
  styleUrls: ['./boton-escritorio-pequenio-gris.component.scss']
})
export class BotonEscritorioPequenioGrisComponent {
  @Input() mensaje: string = 'cel-gra-gris'; // Mensaje predeterminado "Pequeño"
}
