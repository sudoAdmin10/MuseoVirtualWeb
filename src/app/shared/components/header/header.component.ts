import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }


  @Output() toggleSidebar = new EventEmitter<void>();

  profile() {
    this.router.navigate(['/profesores/profile']);
  }

  home() {
    this.router.navigate(['/dashboard']);
  }

  galery() {
    this.router.navigate(['/museo/galeria']);
  }

  museum() {
    this.router.navigate(['/museo/subir-contenido']);
  }
}
