import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin = true;

  email = '';
  password = '';

  fullName = '';
  department = '';

  constructor(private auth: AuthService, private router: Router) { }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit() {
    const success = this.isLogin
      ? this.auth.login(this.email, this.password)
      : this.auth.register({ email: this.email, fullName: this.fullName, department: this.department });

    if (success) {
      this.router.navigate(['/profile']);
    } else {
      alert('Error in credentials');
    }
  }
}
