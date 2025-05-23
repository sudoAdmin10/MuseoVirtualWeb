import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { share } from 'rxjs';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatCardModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MatCardModule,
    FormsModule,
    MatIcon,

  ]
})
export class SharedModule { }
