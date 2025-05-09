import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { ProfesoresComponent } from './profesores.component';
import { ListadoComponent } from './listado/listado.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    ProfesoresComponent,
    ListadoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ProfesoresRoutingModule
  ]
})
export class ProfesoresModule { }
