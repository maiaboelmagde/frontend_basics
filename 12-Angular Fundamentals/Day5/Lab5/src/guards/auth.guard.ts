import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUserData()) {
      // User is logged in ✅
      return true;
    } else {
      // User is NOT logged in ❌
      alert('You must login first!');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
