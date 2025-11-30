import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
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
          <div style="margin-bottom: 15px;">
            <label style="display: block; margin-bottom: 10px;">Rol:</label>
            <label style="margin-right: 20px;"><input type="radio" formControlName="rol" value="CLIENTE" /> Cliente</label>
            <label><input type="radio" formControlName="rol" value="ENTRENADOR" /> Entrenador</label>
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
      if (role === 'CLIENTE') this.router.navigate(['/cliente/dashboard']);
      else this.router.navigate(['/entrenador/dashboard']);
    });
  }
}
