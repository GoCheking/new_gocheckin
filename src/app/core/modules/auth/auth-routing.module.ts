import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent // Cargar el componente directamente, no es necesario usar loadChildren aquí
  },
  // Otras rutas específicas de autenticación
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}