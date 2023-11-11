import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentesComponent } from './componentes.component'; // Asegúrate de importar el componente correcto

const componentesRoutes: Routes = [
  {
    path: '',
    component: ComponentesComponent // Cargar el componente para la ruta /componentes
  },
  // Otras rutas específicas de componentes, si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(componentesRoutes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule { }
