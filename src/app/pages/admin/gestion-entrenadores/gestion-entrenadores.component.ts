import { Component } from '@angular/core';

interface Entrenador {
  id: number;
  nombre: string;
  email: string;
  especialidades: string[];
  estado: 'pendiente' | 'aprobado' | 'rechazado';
  certificaciones: number;
  experiencia: number;
  avatar: string;
  fechaSolicitud: Date;
}

@Component({
  selector: 'ngx-gestion-entrenadores',
  templateUrl: './gestion-entrenadores.component.html',
  styleUrls: ['./gestion-entrenadores.component.scss']
})
export class GestionEntrenadoresComponent {
  entrenadores: Entrenador[] = [
    { id: 1, nombre: 'Carlos Ruiz', email: 'carlos@example.com', especialidades: ['Yoga', 'Pilates'], estado: 'pendiente', certificaciones: 3, experiencia: 5, avatar: 'https://i.pravatar.cc/150?img=11', fechaSolicitud: new Date('2024-03-15') },
    { id: 2, nombre: 'Laura Sánchez', email: 'laura@example.com', especialidades: ['CrossFit', 'HIIT'], estado: 'pendiente', certificaciones: 2, experiencia: 3, avatar: 'https://i.pravatar.cc/150?img=12', fechaSolicitud: new Date('2024-03-18') },
    { id: 3, nombre: 'Ana García', email: 'ana@example.com', especialidades: ['Running', 'Natación'], estado: 'aprobado', certificaciones: 4, experiencia: 8, avatar: 'https://i.pravatar.cc/150?img=13', fechaSolicitud: new Date('2024-02-10') },
    { id: 4, nombre: 'Miguel Torres', email: 'miguel@example.com', especialidades: ['Boxeo'], estado: 'rechazado', certificaciones: 1, experiencia: 2, avatar: 'https://i.pravatar.cc/150?img=14', fechaSolicitud: new Date('2024-03-01') }
  ];

  filtroEstado: string = 'todos';

  get entrenadoresFiltrados(): Entrenador[] {
    if (this.filtroEstado === 'todos') {
      return this.entrenadores;
    }
    return this.entrenadores.filter(e => e.estado === this.filtroEstado);
  }

  aprobar(id: number): void {
    const entrenador = this.entrenadores.find(e => e.id === id);
    if (entrenador) {
      entrenador.estado = 'aprobado';
    }
  }

  rechazar(id: number): void {
    const entrenador = this.entrenadores.find(e => e.id === id);
    if (entrenador) {
      entrenador.estado = 'rechazado';
    }
  }

  getEstadoStatus(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'warning';
      case 'aprobado': return 'success';
      case 'rechazado': return 'danger';
      default: return 'basic';
    }
  }
}
