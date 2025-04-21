import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuseosComponent } from './museos.component';

const routes: Routes = [{ path: '', component: MuseosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MuseosRoutingModule { }
