import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  login() {
    const enteredData = this.loginForm.value;
    const savedUser = this.authService.getUserData();

    console.log(savedUser);
    console.log(enteredData)

    if (!savedUser) {

      alert('No user found. Please register first.');
      return;
    }

    if (enteredData.email === savedUser.email && enteredData.password === savedUser.password) {
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid email or password!');
    }
  }
}
