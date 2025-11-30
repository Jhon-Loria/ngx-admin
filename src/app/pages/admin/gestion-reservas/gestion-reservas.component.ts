import { Component } from '@angular/core';

interface Reserva {
  id: number;
  cliente: string;
  entrenador: string;
  deporte: string;
  fecha: Date;
  hora: string;
  estado: 'confirmada' | 'completada' | 'cancelada';
  precio: number;
}

@Component({
  selector: 'ngx-gestion-reservas',
  templateUrl: './gestion-reservas.component.html',
  styleUrls: ['./gestion-reservas.component.scss']
})
export class GestionReservasComponent {
  reservas: Reserva[] = [
    { id: 1, cliente: 'Juan Pérez', entrenador: 'Ana García', deporte: 'Yoga', fecha: new Date('2024-03-25'), hora: '10:00', estado: 'confirmada', precio: 30 },
    { id: 2, cliente: 'María López', entrenador: 'Carlos Ruiz', deporte: 'CrossFit', fecha: new Date('2024-03-24'), hora: '16:00', estado: 'completada', precio: 45 },
    { id: 3, cliente: 'Pedro Sánchez', entrenador: 'Laura Martínez', deporte: 'Pilates', fecha: new Date('2024-03-26'), hora: '09:00', estado: 'confirmada', precio: 35 },
    { id: 4, cliente: 'Carmen Ruiz', entrenador: 'Miguel Torres', deporte: 'Running', fecha: new Date('2024-03-23'), hora: '07:00', estado: 'cancelada', precio: 25 }
  ];

  filtroEstado: string = 'todos';

  get reservasFiltradas(): Reserva[] {
    if (this.filtroEstado === 'todos') {
      return this.reservas;
    }
    return this.reservas.filter(r => r.estado === this.filtroEstado);
  }

  getEstadoStatus(estado: string): string {
    switch (estado) {
      case 'confirmada': return 'info';
      case 'completada': return 'success';
      case 'cancelada': return 'danger';
      default: return 'basic';
    }
  }

  cancelarReserva(id: number): void {
    const reserva = this.reservas.find(r => r.id === id);
    if (reserva) {
      reserva.estado = 'cancelada';
    }
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor);
  }
}
