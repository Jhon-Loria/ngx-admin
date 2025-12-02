import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionEntrenadoresComponent } from './gestion-entrenadores/gestion-entrenadores.component';
import { GestionDeportesComponent } from './gestion-deportes/gestion-deportes.component';
import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';
import { GestionClasesComponent } from './gestion-clases/gestion-clases.component';
import { GestionPagosComponent } from './gestion-pagos/gestion-pagos.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: 'gestion-usuarios', component: GestionUsuariosComponent },
  { path: 'gestion-entrenadores', component: GestionEntrenadoresComponent },
  { path: 'gestion-deportes', component: GestionDeportesComponent },
  { path: 'gestion-reservas', component: GestionReservasComponent },
  { path: 'gestion-clases', component: GestionClasesComponent },
  { path: 'gestion-pagos', component: GestionPagosComponent },
  { path: 'reportes', component: ReportesComponent },
  // Redirecciones para mantener compatibilidad con rutas cortas
  { path: 'usuarios', redirectTo: 'gestion-usuarios', pathMatch: 'full' },
  { path: 'entrenadores', redirectTo: 'gestion-entrenadores', pathMatch: 'full' },
  { path: 'deportes', redirectTo: 'gestion-deportes', pathMatch: 'full' },
  { path: 'reservas', redirectTo: 'gestion-reservas', pathMatch: 'full' },
  { path: 'clases', redirectTo: 'gestion-clases', pathMatch: 'full' },
  { path: 'pagos', redirectTo: 'gestion-pagos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
