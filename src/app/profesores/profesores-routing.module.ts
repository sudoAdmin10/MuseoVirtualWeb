import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfesoresComponent } from './profesores.component';
import { ListadoComponent } from './listado/listado.component';
import { CrearEditarComponent } from './crear-editar/crear-editar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '', component: ProfesoresComponent
},
{ path: '', component: ListadoComponent },
{ path: 'nuevo', component: CrearEditarComponent },
{ path: 'editar/:id', component: CrearEditarComponent },
{ path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
