import { Component } from '@angular/core';

interface Pago {
  id: number;
  cliente: string;
  entrenador: string;
  monto: number;
  comision: number;
  fecha: Date;
  estado: 'completado' | 'pendiente' | 'fallido';
  metodo: string;
}

@Component({
  selector: 'ngx-gestion-pagos',
  templateUrl: './gestion-pagos.component.html',
  styleUrls: ['./gestion-pagos.component.scss']
})
export class GestionPagosComponent {
  pagos: Pago[] = [
    { id: 1, cliente: 'Juan Pérez', entrenador: 'Ana García', monto: 30, comision: 3, fecha: new Date('2024-03-20'), estado: 'completado', metodo: 'Tarjeta' },
    { id: 2, cliente: 'María López', entrenador: 'Carlos Ruiz', monto: 45, comision: 4.5, fecha: new Date('2024-03-21'), estado: 'completado', metodo: 'PayPal' },
    { id: 3, cliente: 'Pedro Sánchez', entrenador: 'Laura Martínez', monto: 35, comision: 3.5, fecha: new Date('2024-03-22'), estado: 'pendiente', metodo: 'Tarjeta' },
    { id: 4, cliente: 'Carmen Ruiz', entrenador: 'Miguel Torres', monto: 25, comision: 2.5, fecha: new Date('2024-03-23'), estado: 'fallido', metodo: 'Transferencia' }
  ];

  get totalIngresos(): number {
    return this.pagos.filter(p => p.estado === 'completado').reduce((sum, p) => sum + p.monto, 0);
  }

  get totalComisiones(): number {
    return this.pagos.filter(p => p.estado === 'completado').reduce((sum, p) => sum + p.comision, 0);
  }

  get pagosCompletados(): number {
    return this.pagos.filter(p => p.estado === 'completado').length;
  }

  getEstadoStatus(estado: string): string {
    switch (estado) {
      case 'completado': return 'success';
      case 'pendiente': return 'warning';
      case 'fallido': return 'danger';
      default: return 'basic';
    }
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor);
  }
}
