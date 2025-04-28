import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { Teacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
      this.auth.login(this.email, this.password).subscribe(
        (user) => {
          console.log('Inicio de sesión exitoso:', user);
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('Error en credenciales:', error);
          alert('Credenciales incorrectas');
        }
      );
    } else {
      const newUser = {
        email: this.email,
        username: this.username,
        password: this.password,
      };

      this.auth.register(newUser).subscribe(
        (user) => {
          console.log('Registro exitoso:', user);
          this.router.navigate(['/profile']);
        },
        (error) => {
          console.error('Error en el registro:', error);
          alert('Error al registrarse');
        }
      );
    }
  }


}
