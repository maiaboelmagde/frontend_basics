import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: any = null;

  saveUser(data: any) {
    this.userData = data;
  }

  getUserData() {
    return this.userData;
  }
}
