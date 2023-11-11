import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-celular-grande-azul',
  templateUrl: './boton-celular-grande-azul.component.html',
  styleUrls: ['./boton-celular-grande-azul.component.scss']
})
export class BotonCelularGrandeAzulComponent {
  @Input() mensaje: string = 'cel-gra-azul'; // Mensaje predeterminado "Pequeño"
}
