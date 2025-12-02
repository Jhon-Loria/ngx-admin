import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private api: ApiService) {}

  // Dashboard y Estadísticas
  getStats(): Observable<any> {
    return this.api.get('/admin/stats');
  }

  getDashboardStats(): Observable<any> {
    return this.api.get('/admin/dashboard');
  }

  // Usuarios
  getUsuarios(filtros?: any): Observable<any> {
    return this.api.get('/admin/usuarios', filtros);
  }

  getUsuario(id: number): Observable<any> {
    return this.api.get(`/admin/usuarios/${id}`);
  }

  actualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.api.put(`/admin/usuarios/${id}`, usuario);
  }

  cambiarRol(id: number, rol: string): Observable<any> {
    return this.api.put(`/admin/usuarios/${id}/rol`, { rol });
  }

  toggleActivo(id: number, activo: boolean): Observable<any> {
    return this.api.put(`/admin/usuarios/${id}/activo`, { activo });
  }

  // Entrenadores
  getEntrenadores(filtros?: any): Observable<any> {
    return this.api.get('/admin/entrenadores', filtros);
  }

  aprobarEntrenador(id: number): Observable<any> {
    return this.api.put(`/admin/entrenadores/${id}/aprobar`, {});
  }

  rechazarEntrenador(id: number, motivo?: string): Observable<any> {
    return this.api.put(`/admin/entrenadores/${id}/rechazar`, { motivo });
  }

  // Deportes
  getDeportes(): Observable<any> {
    return this.api.get('/admin/deportes');
  }

  crearDeporte(deporte: any): Observable<any> {
    return this.api.post('/admin/deportes', deporte);
  }

  actualizarDeporte(id: number, deporte: any): Observable<any> {
    return this.api.put(`/admin/deportes/${id}`, deporte);
  }

  eliminarDeporte(id: number): Observable<any> {
    return this.api.delete(`/admin/deportes/${id}`);
  }

  toggleDeporteActivo(id: number, activo: boolean): Observable<any> {
    return this.api.put(`/admin/deportes/${id}/activo`, { activo });
  }

  // Reservas
  getReservas(filtros?: any): Observable<any> {
    return this.api.get('/admin/reservas', filtros);
  }

  cancelarReserva(id: number, motivo?: string): Observable<any> {
    return this.api.put(`/admin/reservas/${id}/cancelar`, { motivo });
  }

  // Clases
  getClases(filtros?: any): Observable<any> {
    return this.api.get('/admin/clases', filtros);
  }

  aprobarClase(id: number): Observable<any> {
    return this.api.put(`/admin/clases/${id}/aprobar`, {});
  }

  rechazarClase(id: number, motivo?: string): Observable<any> {
    return this.api.put(`/admin/clases/${id}/rechazar`, { motivo });
  }

  // Pagos
  getPagos(filtros?: any): Observable<any> {
    return this.api.get('/admin/pagos', filtros);
  }

  getPago(id: number): Observable<any> {
    return this.api.get(`/admin/pagos/${id}`);
  }

  // Reportes
  generarReporte(tipo: string, filtros?: any): Observable<Blob> {
    return this.api.get<Blob>(`/admin/reportes/${tipo}`, filtros, { responseType: 'blob' as 'json' });
  }

  getReportes(): Observable<any> {
    return this.api.get('/admin/reportes');
  }
}
