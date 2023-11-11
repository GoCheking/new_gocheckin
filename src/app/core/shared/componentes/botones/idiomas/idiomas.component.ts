import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.scss']
})
export class IdiomasComponent {
  @Input() mensaje: string = 'en'; // Mensaje predeterminado "Pequeño"

}
