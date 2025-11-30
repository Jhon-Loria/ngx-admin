import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Deporte {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  activo: boolean;
  icono: string;
}

@Component({
  selector: 'ngx-gestion-deportes',
  templateUrl: './gestion-deportes.component.html',
  styleUrls: ['./gestion-deportes.component.scss']
})
export class GestionDeportesComponent {
  deportes: Deporte[] = [
    { id: 1, nombre: 'Yoga', categoria: 'Mindfulness', descripcion: 'Ejercicios de equilibrio y flexibilidad', activo: true, icono: 'heart-outline' },
    { id: 2, nombre: 'CrossFit', categoria: 'Alta Intensidad', descripcion: 'Entrenamiento funcional intensivo', activo: true, icono: 'flash-outline' },
    { id: 3, nombre: 'Pilates', categoria: 'Mindfulness', descripcion: 'Fortalecimiento del core', activo: true, icono: 'star-outline' },
    { id: 4, nombre: 'Running', categoria: 'Cardiovascular', descripcion: 'Carrera y resistencia', activo: false, icono: 'navigation-2-outline' }
  ];

  deporteForm: FormGroup;
  editando = false;
  deporteEditandoId: number | null = null;

  categorias = ['Mindfulness', 'Alta Intensidad', 'Cardiovascular', 'Fuerza', 'Flexibilidad'];

  constructor(private fb: FormBuilder) {
    this.deporteForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(200)]],
      icono: ['', Validators.required],
      activo: [true]
    });
  }

  nuevoDeporte(): void {
    this.editando = false;
    this.deporteEditandoId = null;
    this.deporteForm.reset({ activo: true });
  }

  editarDeporte(deporte: Deporte): void {
    this.editando = true;
    this.deporteEditandoId = deporte.id;
    this.deporteForm.patchValue(deporte);
  }

  guardarDeporte(): void {
    if (this.deporteForm.valid) {
      if (this.editando && this.deporteEditandoId) {
        const index = this.deportes.findIndex(d => d.id === this.deporteEditandoId);
        if (index !== -1) {
          this.deportes[index] = { ...this.deportes[index], ...this.deporteForm.value };
        }
      } else {
        const nuevoId = Math.max(...this.deportes.map(d => d.id), 0) + 1;
        this.deportes.push({ id: nuevoId, ...this.deporteForm.value });
      }
      this.deporteForm.reset({ activo: true });
      this.editando = false;
      this.deporteEditandoId = null;
    }
  }

  eliminarDeporte(id: number): void {
    this.deportes = this.deportes.filter(d => d.id !== id);
  }

  toggleActivo(id: number): void {
    const deporte = this.deportes.find(d => d.id === id);
    if (deporte) {
      deporte.activo = !deporte.activo;
    }
  }
}
