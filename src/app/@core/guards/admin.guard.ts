import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.auth.getRole();
    if (role === 'ADMIN' || role === 'admin' || role === 'administrador') {
      return true;
    }
    // Redirigir al login si no es admin
    this.router.navigate(['/auth/login']);
    return false;
  }
}

