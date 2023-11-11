import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { BotonesComponent } from './botones/botones.component';
import { PequenioComponent } from './botones/pequenio/pequenio.component';
import { MedianoComponent } from './botones/mediano/mediano.component';
import { GrandeComponent } from './botones/grande/grande.component';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { ComponentesRoutingModule } from './componentes-routing.module';

import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';


import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BotonCelularGrandeAzulComponent } from './botones/boton-celular-grande-azul/boton-celular-grande-azul.component';
import { BotonCelularGrandeGrisComponent } from './botones/boton-celular-grande-gris/boton-celular-grande-gris.component';
import { BotonEscritorioPequenioAzulComponent } from './botones/boton-escritorio-pequenio-azul/boton-escritorio-pequenio-azul.component';
import { BotonEscritorioPequenioGrisComponent } from './botones/boton-escritorio-pequenio-gris/boton-escritorio-pequenio-gris.component';
import { MovilFormLoginComponent } from './botones/movil-form-login/movil-form-login.component';
import { ImputNombreComponent } from './imput/imput-nombre/imput-nombre.component';
import { ImputPasswordComponent } from './imput/imput-password/imput-password.component';
import { ImputCheckboxComponent } from './imput/imput-checkbox/imput-checkbox.component';

import {MatSelectModule} from '@angular/material/select';

import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { IdiomasComponent } from './botones/idiomas/idiomas.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';


@NgModule({
  declarations: [
    

    ComponentesComponent,
    BotonesComponent,
    PequenioComponent,
    MedianoComponent,
    GrandeComponent,
    BotonCelularGrandeAzulComponent,
    BotonCelularGrandeGrisComponent,
    BotonEscritorioPequenioAzulComponent,
    BotonEscritorioPequenioGrisComponent,
    MovilFormLoginComponent,
    ImputNombreComponent,
    ImputPasswordComponent,
    ImputCheckboxComponent,
    IdiomasComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
   //) AngularMaterialModule, // Asegúrate de importar AngularMaterialModule aquí
    ComponentesRoutingModule,
    MatButtonModule, MatDividerModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf,
    
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
    MatIconModule,
   
   
  ],
  exports:[    ComponentesComponent,
    BotonCelularGrandeAzulComponent,
    BotonCelularGrandeGrisComponent,
    BotonEscritorioPequenioAzulComponent,
    BotonEscritorioPequenioGrisComponent,
    MovilFormLoginComponent,
    ImputNombreComponent,
    ImputPasswordComponent,
    ImputCheckboxComponent,
    IdiomasComponent,
  ],
  
  
  
})
export class ComponentesModule { }