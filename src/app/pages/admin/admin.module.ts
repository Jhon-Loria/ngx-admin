import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';
import { GestionEntrenadoresComponent } from './gestion-entrenadores/gestion-entrenadores.component';
import { GestionDeportesComponent } from './gestion-deportes/gestion-deportes.component';
import { GestionReservasComponent } from './gestion-reservas/gestion-reservas.component';
import { GestionClasesComponent } from './gestion-clases/gestion-clases.component';
import { GestionPagosComponent } from './gestion-pagos/gestion-pagos.component';
import { ReportesComponent } from './reportes/reportes.component';

import { 
  NbCardModule, 
  NbButtonModule, 
  NbIconModule, 
  NbInputModule,
  NbBadgeModule,
  NbSelectModule,
  NbTabsetModule,
  NbListModule,
  NbProgressBarModule,
  NbCheckboxModule,
  NbTooltipModule,
  NbAlertModule,
  NbDialogModule,
  NbToggleModule,
  NbUserModule,
  NbDatepickerModule
} from '@nebular/theme';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    GestionUsuariosComponent,
    GestionEntrenadoresComponent,
    GestionDeportesComponent,
    GestionReservasComponent,
    GestionClasesComponent,
    GestionPagosComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbBadgeModule,
    NbSelectModule,
    NbTabsetModule,
    NbListModule,
    NbProgressBarModule,
    NbCheckboxModule,
    NbTooltipModule,
    NbAlertModule,
    NbDialogModule.forChild(),
    NbToggleModule,
    NbUserModule,
    NbDatepickerModule
  ]
})
export class AdminModule { }
