import { Component } from '@angular/core';

interface Metrica {
  titulo: string;
  valor: number;
  icono: string;
  color: string;
  cambio: string;
  ruta: string;
}

interface Aprobacion {
  id: number;
  tipo: 'entrenador' | 'clase';
  nombre: string;
  fecha: Date;
  estado: 'pendiente' | 'aprobado' | 'rechazado';
}

@Component({
  selector: 'ngx-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  metricas: Metrica[] = [
    { titulo: 'Usuarios Totales', valor: 2847, icono: 'people-outline', color: '#3366ff', cambio: '+12%', ruta: '/pages/admin/usuarios' },
    { titulo: 'Entrenadores Activos', valor: 156, icono: 'activity-outline', color: '#00d68f', cambio: '+8%', ruta: '/pages/admin/entrenadores' },
    { titulo: 'Ingresos Mes', valor: 18950, icono: 'credit-card-outline', color: '#ffaa00', cambio: '+15%', ruta: '/pages/admin/pagos' },
    { titulo: 'Sesiones Completadas', valor: 1245, icono: 'checkmark-circle-outline', color: '#8b5cf6', cambio: '+22%', ruta: '/pages/admin/reservas' }
  ];

  aprobacionesPendientes: Aprobacion[] = [
    { id: 1, tipo: 'entrenador', nombre: 'Carlos Ruiz', fecha: new Date(), estado: 'pendiente' },
    { id: 2, tipo: 'clase', nombre: 'Yoga Avanzado', fecha: new Date(), estado: 'pendiente' },
    { id: 3, tipo: 'entrenador', nombre: 'María López', fecha: new Date(), estado: 'pendiente' }
  ];

  estadisticasActividad = [
    { mes: 'Ene', usuarios: 2200, sesiones: 890 },
    { mes: 'Feb', usuarios: 2450, sesiones: 980 },
    { mes: 'Mar', usuarios: 2650, sesiones: 1120 },
    { mes: 'Abr', usuarios: 2847, sesiones: 1245 }
  ];

  getMaxValor(campo: 'usuarios' | 'sesiones'): number {
    return Math.max(...this.estadisticasActividad.map(e => e[campo]));
  }

  getBarHeight(valor: number, max: number): number {
    return (valor / max) * 100;
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor);
  }

  aprobar(id: number): void {
    const aprobacion = this.aprobacionesPendientes.find(a => a.id === id);
    if (aprobacion) {
      aprobacion.estado = 'aprobado';
    }
  }

  rechazar(id: number): void {
    const aprobacion = this.aprobacionesPendientes.find(a => a.id === id);
    if (aprobacion) {
      aprobacion.estado = 'rechazado';
    }
  }
}
