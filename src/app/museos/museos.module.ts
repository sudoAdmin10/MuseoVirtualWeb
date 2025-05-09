import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseosRoutingModule } from './museos-routing.module';
import { MuseosComponent } from './museos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';
import { SharedModule } from '../shared/shared.module';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    MuseosComponent,
    GaleriaComponent,
    SubirImagenComponent,
    CrearEditarComponent,
  ],
  imports: [
    CommonModule,
    MuseosRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    MuseosComponent,
    GaleriaComponent,
    SubirImagenComponent,
    CrearEditarComponent]
})
export class MuseosModule { }
