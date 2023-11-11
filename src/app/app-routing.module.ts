import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' }, // Redirige a la autenticación por defecto
  { path: 'auth', loadChildren: () => import('./core/modules/auth/auth.module').then((m) => m.AuthModule) },
  { path: 'componentes', loadChildren: () => import('./core/shared/componentes/componentes.module').then((m) => m.ComponentesModule) },

 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }