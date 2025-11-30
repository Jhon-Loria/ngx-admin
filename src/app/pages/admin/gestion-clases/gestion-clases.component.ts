import { Component } from '@angular/core';

interface Clase {
  id: number;
  nombre: string;
  entrenador: string;
  deporte: string;
  modalidad: 'presencial' | 'online' | 'hibrida';
  estado: 'pendiente' | 'aprobada' | 'rechazada';
  cupo: number;
  precio: number;
}

@Component({
  selector: 'ngx-gestion-clases',
  templateUrl: './gestion-clases.component.html',
  styleUrls: ['./gestion-clases.component.scss']
})
export class GestionClasesComponent {
  clases: Clase[] = [
    { id: 1, nombre: 'Yoga para Principiantes', entrenador: 'Ana García', deporte: 'Yoga', modalidad: 'presencial', estado: 'pendiente', cupo: 15, precio: 25 },
    { id: 2, nombre: 'CrossFit Avanzado', entrenador: 'Carlos Ruiz', deporte: 'CrossFit', modalidad: 'presencial', estado: 'aprobada', cupo: 10, precio: 45 },
    { id: 3, nombre: 'Pilates Online', entrenador: 'Laura Martínez', deporte: 'Pilates', modalidad: 'online', estado: 'pendiente', cupo: 20, precio: 30 },
    { id: 4, nombre: 'Running Matutino', entrenador: 'Miguel Torres', deporte: 'Running', modalidad: 'presencial', estado: 'rechazada', cupo: 12, precio: 20 }
  ];

  filtroEstado: string = 'todos';

  get clasesFiltradas(): Clase[] {
    if (this.filtroEstado === 'todos') {
      return this.clases;
    }
    return this.clases.filter(c => c.estado === this.filtroEstado);
  }

  aprobar(id: number): void {
    const clase = this.clases.find(c => c.id === id);
    if (clase) {
      clase.estado = 'aprobada';
    }
  }

  rechazar(id: number): void {
    const clase = this.clases.find(c => c.id === id);
    if (clase) {
      clase.estado = 'rechazada';
    }
  }

  getEstadoStatus(estado: string): string {
    switch (estado) {
      case 'pendiente': return 'warning';
      case 'aprobada': return 'success';
      case 'rechazada': return 'danger';
      default: return 'basic';
    }
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor);
  }
}
