import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-celular-grande-gris',
  templateUrl: './boton-celular-grande-gris.component.html',
  styleUrls: ['./boton-celular-grande-gris.component.scss']
})
export class BotonCelularGrandeGrisComponent {
  @Input() mensaje: string = 'cel-gra-gris'; // Mensaje predeterminado "Pequeño"
}
