import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ComponentesModule } from '../../shared/componentes/componentes.module';
import { FotoComponent } from './login/componentes/foto/foto.component';
import { FormComponent } from './login/componentes/form/form.component';
import { HeaderComponent } from './login/componentes/form/header/header.component';
import { MainComponent } from './login/componentes/form/main/main.component';
import { FooterComponent } from './login/componentes/form/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    FotoComponent,
    FormComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule, // Importar el módulo de rutas directamente
    ComponentesModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule { }