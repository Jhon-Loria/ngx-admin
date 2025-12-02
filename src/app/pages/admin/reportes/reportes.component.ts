import { Component } from '@angular/core';

interface Estadistica {
  periodo: string;
  usuarios: number;
  sesiones: number;
  ingresos: number;
}

@Component({
  selector: 'ngx-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent {
  estadisticas: Estadistica[] = [
    { periodo: 'Enero', usuarios: 2200, sesiones: 890, ingresos: 14500 },
    { periodo: 'Febrero', usuarios: 2450, sesiones: 980, ingresos: 16200 },
    { periodo: 'Marzo', usuarios: 2650, sesiones: 1120, ingresos: 18950 },
    { periodo: 'Abril', usuarios: 2847, sesiones: 1245, ingresos: 20100 }
  ];

  kpis = {
    crecimientoUsuarios: 12,
    tasaRetencion: 87,
    satisfaccionPromedio: 4.6,
    ingresosPromedio: 17437
  };

  getMaxValor(campo: 'usuarios' | 'sesiones' | 'ingresos'): number {
    return Math.max(...this.estadisticas.map(e => e[campo]));
  }

  getBarHeight(valor: number, max: number): number {
    return (valor / max) * 100;
  }

  formatearMoneda(valor: number): string {
    return new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(valor);
  }

  exportarPDF(): void {
    console.log('Exportando reporte a PDF...');
  }

  exportarExcel(): void {
    console.log('Exportando reporte a Excel...');
  }
}
