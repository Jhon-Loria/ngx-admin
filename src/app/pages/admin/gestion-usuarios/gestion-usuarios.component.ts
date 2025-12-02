import { Component } from '@angular/core';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: 'cliente' | 'entrenador' | 'admin';
  activo: boolean;
  fechaRegistro: Date;
  avatar: string;
}

@Component({
  selector: 'ngx-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent {
  usuarios: Usuario[] = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'cliente', activo: true, fechaRegistro: new Date('2024-01-15'), avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'entrenador', activo: true, fechaRegistro: new Date('2024-02-10'), avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, nombre: 'Carlos López', email: 'carlos@example.com', rol: 'cliente', activo: false, fechaRegistro: new Date('2024-01-20'), avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, nombre: 'Ana Martínez', email: 'ana@example.com', rol: 'entrenador', activo: true, fechaRegistro: new Date('2024-03-05'), avatar: 'https://i.pravatar.cc/150?img=4' }
  ];

  filtro = '';
  rolSeleccionado: string = 'todos';
  estadoSeleccionado: string = 'todos';

  get usuariosFiltrados(): Usuario[] {
    return this.usuarios.filter(u => {
      const matchFiltro = u.nombre.toLowerCase().includes(this.filtro.toLowerCase()) || 
                          u.email.toLowerCase().includes(this.filtro.toLowerCase());
      const matchRol = this.rolSeleccionado === 'todos' || u.rol === this.rolSeleccionado;
      const matchEstado = this.estadoSeleccionado === 'todos' || 
                          (this.estadoSeleccionado === 'activo' && u.activo) ||
                          (this.estadoSeleccionado === 'inactivo' && !u.activo);
      return matchFiltro && matchRol && matchEstado;
    });
  }

  toggleActivo(id: number): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.activo = !usuario.activo;
    }
  }

  cambiarRol(id: number, nuevoRol: 'cliente' | 'entrenador' | 'admin'): void {
    const usuario = this.usuarios.find(u => u.id === id);
    if (usuario) {
      usuario.rol = nuevoRol;
    }
  }
}
