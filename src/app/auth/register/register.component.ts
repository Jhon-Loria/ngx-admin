import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1a1a1a; padding: 20px;">
      <div style="background: white; border-radius: 8px; padding: 40px; max-width: 500px; width: 100%; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
        <h2 style="text-align: center; margin-bottom: 30px; color: #2c3e50;">Registro</h2>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <div style="margin-bottom: 15px;">
            <input formControlName="nombre" placeholder="Nombre" style="width: 100%; padding: 10px; border: 1px solid #e4e9f2; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div style="margin-bottom: 15px;">
            <input formControlName="apellido" placeholder="Apellido" style="width: 100%; padding: 10px; border: 1px solid #e4e9f2; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div style="margin-bottom: 15px;">
            <input formControlName="email" placeholder="Email" style="width: 100%; padding: 10px; border: 1px solid #e4e9f2; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div style="margin-bottom: 15px;">
            <input formControlName="contrasena" type="password" placeholder="Contraseña" style="width: 100%; padding: 10px; border: 1px solid #e4e9f2; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div style="margin-bottom: 15px;">
            <input formControlName="confirmar_contrasena" type="password" placeholder="Confirmar Contraseña" style="width: 100%; padding: 10px; border: 1px solid #e4e9f2; border-radius: 4px; box-sizing: border-box;" />
          </div>
          <div style="margin-bottom: 20px;">
            <label style="display: block; margin-bottom: 5px; font-weight: 500; color: #2c3e50;">Entrar como *</label>
            <div style="display: flex; gap: 15px; flex-wrap: wrap;">
              <label style="display: flex; align-items: center; cursor: pointer; padding: 10px; border: 2px solid #e4e9f2; border-radius: 4px; flex: 1; min-width: 100px; transition: all 0.3s;" [style.border-color]="form.get('rol')?.value === 'CLIENTE' ? '#667eea' : '#e4e9f2'" [style.background]="form.get('rol')?.value === 'CLIENTE' ? '#f0f4ff' : 'white'">
                <input type="radio" formControlName="rol" value="CLIENTE" style="margin-right: 8px;" />
                <span>Cliente</span>
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; padding: 10px; border: 2px solid #e4e9f2; border-radius: 4px; flex: 1; min-width: 100px; transition: all 0.3s;" [style.border-color]="form.get('rol')?.value === 'ENTRENADOR' ? '#667eea' : '#e4e9f2'" [style.background]="form.get('rol')?.value === 'ENTRENADOR' ? '#f0f4ff' : 'white'">
                <input type="radio" formControlName="rol" value="ENTRENADOR" style="margin-right: 8px;" />
                <span>Entrenador</span>
              </label>
              <label style="display: flex; align-items: center; cursor: pointer; padding: 10px; border: 2px solid #e4e9f2; border-radius: 4px; flex: 1; min-width: 100px; transition: all 0.3s;" [style.border-color]="form.get('rol')?.value === 'ADMIN' ? '#667eea' : '#e4e9f2'" [style.background]="form.get('rol')?.value === 'ADMIN' ? '#f0f4ff' : 'white'">
                <input type="radio" formControlName="rol" value="ADMIN" style="margin-right: 8px;" />
                <span>Administrador</span>
              </label>
            </div>
            <small style="color: red; font-size: 0.85rem;" *ngIf="form.get('rol')?.invalid && form.get('rol')?.touched">
              <span *ngIf="form.get('rol')?.errors?.['required']">Debes seleccionar un rol</span>
            </small>
          </div>
          <div style="margin-bottom: 20px;">
            <label><input type="checkbox" formControlName="terminos" /> Acepto términos y condiciones</label>
          </div>
          <button type="submit" [disabled]="form.invalid" style="width: 100%; padding: 12px; background: #667eea; color: white; border: none; border-radius: 4px; font-size: 1rem; font-weight: 600; cursor: pointer;">Registrarse</button>
          <div style="text-align: center; margin-top: 20px;">
            <a routerLink="/auth/login" style="color: #667eea; text-decoration: none;">¿Ya tienes cuenta? Inicia sesión</a>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      confirmar_contrasena: ['', Validators.required],
      rol: ['CLIENTE', Validators.required],
      terminos: [false, Validators.requiredTrue]
    }, { validators: this.passwordsMatch });
  }

  passwordsMatch(group: FormGroup) {
    const p = group.get('contrasena')?.value;
    const c = group.get('confirmar_contrasena')?.value;
    return p === c ? null : { mismatch: true };
  }

  submit() {
    if (this.form.invalid) return;
    this.auth.register(this.form.value).subscribe((res: any) => {
      const role = this.auth.getRole();
      // Redirigir según el rol seleccionado
      if (role === 'CLIENTE' || role === 'cliente') {
        this.router.navigate(['/pages/cliente/dashboard']);
      } else if (role === 'ENTRENADOR' || role === 'entrenador') {
        this.router.navigate(['/pages/entrenador/dashboard']);
      } else if (role === 'ADMIN' || role === 'admin' || role === 'administrador') {
        this.router.navigate(['/pages/admin/dashboard']);
      } else {
        this.router.navigate(['/pages/cliente/dashboard']); // Por defecto
      }
    });
  }
}
