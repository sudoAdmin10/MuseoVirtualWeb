import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  isLogin = true;

  email = '';
  password = '';
  username = '';


  constructor(private auth: AuthService, private router: Router) { }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    if (this.isLogin) {
      this.auth.login(this.email, this.password).subscribe({
        next: (res) => {
          console.log('Inicio de sesión exitoso:', res);

          if (res.user) {
            this.auth.setUser(res.user);
          }

          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert('Login fallido');
          console.error(err);
        }
      });

    } else {
      const newUser = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      this.auth.register(newUser).subscribe(
        (user) => {
          console.log('Registro exitoso:', user);
          this.router.navigate(['/dashborad']);
        },
        (error) => {
          console.error('Error en el registro:', error);
          alert('Error al registrarse');
        }
      );
    }
  }


}
