import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export interface JwtPayload {
  sub: string; // Nombre de usuario (identificador principal)
  role: string;
  exp?: number;
  email?: string; // Email del usuario
  nombreUsuario?: string; // Nombre de usuario
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = `${environment.apiUrl}/auth`;
  private tokenKey = 'fit_token';
  private _currentUser$ = new BehaviorSubject<JwtPayload | null>(null);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem(this.tokenKey);
    if (token) {
      this._currentUser$.next(this.decodeToken(token));
    }
  }

  register(payload: any): Observable<any> {
    return this.http.post(`${this.api}/register`, payload).pipe(
      tap((res: any) => {
        if (res?.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this._currentUser$.next(this.decodeToken(res.token));
        }
      })
    );
  }

  login(payload: any): Observable<any> {
    return this.http.post(`${this.api}/login`, payload).pipe(
      tap((res: any) => {
        if (res?.token) {
          localStorage.setItem(this.tokenKey, res.token);
          this._currentUser$.next(this.decodeToken(res.token));
        }
      })
    );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this._currentUser$.next(null);
  }

  get token() {
    return localStorage.getItem(this.tokenKey) || null;
  }

  currentUser(): Observable<JwtPayload | null> {
    return this._currentUser$.asObservable();
  }

  getRole(): string | null {
    return this._currentUser$.value?.role || null;
  }

  // Obtener el email del token
  getEmail(): string | null {
    return this._currentUser$.value?.email || null;
  }

  // Obtener el nombre de usuario del token
  getNombreUsuario(): string | null {
    return this._currentUser$.value?.nombreUsuario || this._currentUser$.value?.sub || null;
  }

  decodeToken(token: string): JwtPayload | null {
    try {
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      return decoded as JwtPayload;
    } catch (e) {
      return null;
    }
  }

  setCurrentUser(payload: JwtPayload | null): void {
    this._currentUser$.next(payload);
  }
}
