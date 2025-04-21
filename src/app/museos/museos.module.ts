import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MuseosRoutingModule } from './museos-routing.module';
import { MuseosComponent } from './museos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';


@NgModule({
  declarations: [
    MuseosComponent,
    GaleriaComponent,
    SubirImagenComponent
  ],
  imports: [
    CommonModule,
    MuseosRoutingModule
  ]
})
export class MuseosModule { }
