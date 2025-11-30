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
  { path: 'usuarios', component: GestionUsuariosComponent },
  { path: 'entrenadores', component: GestionEntrenadoresComponent },
  { path: 'deportes', component: GestionDeportesComponent },
  { path: 'reservas', component: GestionReservasComponent },
  { path: 'clases', component: GestionClasesComponent },
  { path: 'pagos', component: GestionPagosComponent },
  { path: 'reportes', component: ReportesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
