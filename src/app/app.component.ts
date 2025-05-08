import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) {
    this.authService.loadUserFromStorage();
  }
  title = 'museo virtual';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}


