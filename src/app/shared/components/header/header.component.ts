import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }

  @Output() toggleSidebar = new EventEmitter<void>();
  isLogged = false;
  isAdmin = false;

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((status) => {
      this.isLogged = status;
      console.log(status)
      this.isAdmin = this.auth.getRole() === 'admin';
    });
  }

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
