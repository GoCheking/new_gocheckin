import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pequenio',
  templateUrl: './pequenio.component.html',
  styleUrls: ['./pequenio.component.scss']
})
export class PequenioComponent {
  @Input() mensaje: string = 'prueba'; // Mensaje predeterminado "Pequeño"
}
