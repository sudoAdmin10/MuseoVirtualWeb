import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseosComponent } from './museos.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SubirImagenComponent } from './subir-imagen/subir-imagen.component';

const routes: Routes = [{ path: 'galeria', component: GaleriaComponent },
{ path: 'subir-contenido', component: SubirImagenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseosRoutingModule { }
