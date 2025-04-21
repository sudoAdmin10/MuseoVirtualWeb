import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { MuseosModule } from './museos/museos.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,


    //Modules
    MuseosModule,
    ProfesoresModule,
    DashboardModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
