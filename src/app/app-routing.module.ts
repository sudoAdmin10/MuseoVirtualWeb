import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './profesores/profile/profile.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'profesores', loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule) },
{ path: 'museo', loadChildren: () => import('./museos/museos.module').then(m => m.MuseosModule) },
{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: '**', redirectTo: '/dashboard' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
