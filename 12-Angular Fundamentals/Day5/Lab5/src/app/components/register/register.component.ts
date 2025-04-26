import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router) {}

  myValidation = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl(null, [Validators.required])
  });

  sentData() {
    if (this.myValidation.valid) {
      const { name, email, password, confirmPassword } = this.myValidation.value;

      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      // Save the data using the service
      this.authService.saveUser({ name, email, password });

      // Navigate to Login page
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all fields correctly.');
    }
  }
}
