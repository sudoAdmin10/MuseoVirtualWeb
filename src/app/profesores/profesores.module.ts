import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { ListadoComponent } from './listado/listado.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ProfesoresComponent,
    ListadoComponent,
    CrearEditarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
