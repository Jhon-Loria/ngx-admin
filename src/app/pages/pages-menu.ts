import { NbMenuItem } from '@nebular/theme';

// Menú para CLIENTES
const CLIENTE_MENU: NbMenuItem[] = [
  {
    title: 'CLIENTE',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/cliente/dashboard',
    home: true,
  },
  {
    title: 'Buscar Entrenadores',
    icon: 'search-outline',
    link: '/pages/cliente/buscar-entrenadores',
  },
  {
    title: 'Agendar Sesión',
    icon: 'calendar-outline',
    link: '/pages/cliente/agendar-sesion',
  },
  {
    title: 'Mis Reservas',
    icon: 'checkmark-square-outline',
    link: '/pages/cliente/mis-reservas',
  },
  {
    title: 'Mis Pagos',
    icon: 'credit-card-outline',
    link: '/pages/cliente/mis-pagos',
  },
  {
    title: 'Mis Reseñas',
    icon: 'star-outline',
    link: '/pages/cliente/mis-resenas',
  },
  {
    title: 'Mi Perfil',
    icon: 'person-outline',
    link: '/pages/cliente/perfil',
  },
];

// Menú para ENTRENADORES
const ENTRENADOR_MENU: NbMenuItem[] = [
  {
    title: 'ENTRENADOR',
    group: true,
  },
  {
    title: 'Dashboard Entrenador',
    icon: 'activity-outline',
    link: '/pages/entrenador/dashboard',
    home: true,
  },
  {
    title: 'Mi Perfil',
    icon: 'person-outline',
    link: '/pages/entrenador/perfil',
  },
  {
    title: 'Gestión de Clases',
    icon: 'calendar-outline',
    link: '/pages/entrenador/gestion-clases',
  },
  {
    title: 'Mis Clientes',
    icon: 'people-outline',
    link: '/pages/entrenador/mis-clientes',
  },
  {
    title: 'Calendario Disponibilidad',
    icon: 'clock-outline',
    link: '/pages/entrenador/calendario-disponibilidad',
  },
  {
    title: 'Mis Ingresos',
    icon: 'trending-up-outline',
    link: '/pages/entrenador/mis-ingresos',
  },
];

// Menú para ADMINISTRADORES
const ADMIN_MENU: NbMenuItem[] = [
  {
    title: 'ADMINISTRACIÓN',
    group: true,
  },
  {
    title: 'Dashboard Admin',
    icon: 'pie-chart-outline',
    link: '/pages/admin/dashboard',
    home: true,
  },
  {
    title: 'Gestión de Usuarios',
    icon: 'people-outline',
    link: '/pages/admin/gestion-usuarios',
  },
  {
    title: 'Gestión de Entrenadores',
    icon: 'person-done-outline',
    link: '/pages/admin/gestion-entrenadores',
  },
  {
    title: 'Gestión de Deportes',
    icon: 'award-outline',
    link: '/pages/admin/gestion-deportes',
  },
  {
    title: 'Gestión de Clases',
    icon: 'calendar-outline',
    link: '/pages/admin/gestion-clases',
  },
  {
    title: 'Gestión de Reservas',
    icon: 'checkmark-square-2-outline',
    link: '/pages/admin/gestion-reservas',
  },
  {
    title: 'Gestión de Pagos',
    icon: 'credit-card-outline',
    link: '/pages/admin/gestion-pagos',
  },
  {
    title: 'Reportes',
    icon: 'bar-chart-outline',
    link: '/pages/admin/reportes',
  },
];

// Función para obtener el menú según el rol del usuario
// El rol se obtiene automáticamente del token JWT después del login
export function getMenuByRole(role: string | null): NbMenuItem[] {
  if (!role) {
    return CLIENTE_MENU; // Por defecto si no hay rol
  }
  
  // Normalizar el rol a minúsculas para comparación
  const roleLower = role.toLowerCase();
  
  switch (roleLower) {
    case 'cliente':
    case 'client':
      return CLIENTE_MENU;
    case 'entrenador':
    case 'trainer':
      return ENTRENADOR_MENU;
    case 'admin':
    case 'administrador':
    case 'administrator':
      return ADMIN_MENU;
    default:
      return CLIENTE_MENU; // Por defecto muestra el menú de cliente
  }
}

// Exportación por defecto (temporal para compatibilidad)
export const MENU_ITEMS: NbMenuItem[] = CLIENTE_MENU;

