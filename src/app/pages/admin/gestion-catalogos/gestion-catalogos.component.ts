import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService, NbToastrService } from '@nebular/theme';

interface Catalogo {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen_url?: string;
  precio?: number;
  disponible: boolean;
  fecha_creacion: Date;
}

@Component({
  selector: 'ngx-gestion-catalogos',
  templateUrl: './gestion-catalogos.component.html',
  styleUrls: ['./gestion-catalogos.component.scss']
})
export class GestionCatalogosComponent implements OnInit {
  catalogos: Catalogo[] = [];
  catalogosFiltrados: Catalogo[] = [];
  loading = false;
  mostrarFormulario = false;
  catalogoEditando: Catalogo | null = null;
  
  // Formulario
  catalogoForm: FormGroup;
  
  // Filtros
  filtroBusqueda = '';
  filtroCategoria = '';
  
  // Categorías disponibles
  categorias = [
    { value: '', label: 'Todas las categorías' },
    { value: 'deportes', label: 'Deportes' },
    { value: 'equipamiento', label: 'Equipamiento' },
    { value: 'suplementos', label: 'Suplementos' },
    { value: 'ropa', label: 'Ropa Deportiva' },
    { value: 'servicios', label: 'Servicios' }
  ];

  constructor(
    private fb: FormBuilder,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService
  ) {
    this.catalogoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      categoria: ['', Validators.required],
      imagen_url: [''],
      precio: [0, [Validators.required, Validators.min(0)]],
      disponible: [true]
    });
  }

  ngOnInit(): void {
    this.cargarCatalogos();
  }

  cargarCatalogos(): void {
    this.loading = true;
    // Simular carga de datos
    setTimeout(() => {
      this.catalogos = this.getMockCatalogos();
      this.aplicarFiltros();
      this.loading = false;
    }, 500);
  }

  aplicarFiltros(): void {
    this.catalogosFiltrados = this.catalogos.filter(catalogo => {
      const coincideBusqueda = !this.filtroBusqueda || 
        catalogo.nombre.toLowerCase().includes(this.filtroBusqueda.toLowerCase()) ||
        catalogo.descripcion.toLowerCase().includes(this.filtroBusqueda.toLowerCase());
      
      const coincideCategoria = !this.filtroCategoria || 
        catalogo.categoria === this.filtroCategoria;
      
      return coincideBusqueda && coincideCategoria;
    });
  }

  nuevoCatalogo(): void {
    this.catalogoEditando = null;
    this.catalogoForm.reset({
      nombre: '',
      descripcion: '',
      categoria: '',
      imagen_url: '',
      precio: 0,
      disponible: true
    });
    this.mostrarFormulario = true;
  }

  editarCatalogo(catalogo: Catalogo): void {
    this.catalogoEditando = catalogo;
    this.catalogoForm.patchValue({
      nombre: catalogo.nombre,
      descripcion: catalogo.descripcion,
      categoria: catalogo.categoria,
      imagen_url: catalogo.imagen_url || '',
      precio: catalogo.precio || 0,
      disponible: catalogo.disponible
    });
    this.mostrarFormulario = true;
  }

  guardarCatalogo(): void {
    if (this.catalogoForm.invalid) {
      this.toastrService.warning('Por favor, completa todos los campos requeridos', 'Formulario incompleto');
      return;
    }

    const formValue = this.catalogoForm.value;

    if (this.catalogoEditando) {
      // Editar existente
      const index = this.catalogos.findIndex(c => c.id === this.catalogoEditando!.id);
      if (index !== -1) {
        this.catalogos[index] = {
          ...this.catalogos[index],
          ...formValue,
          fecha_creacion: this.catalogos[index].fecha_creacion
        };
        this.toastrService.success('Catálogo actualizado correctamente', 'Éxito');
      }
    } else {
      // Crear nuevo
      const nuevoCatalogo: Catalogo = {
        id: this.catalogos.length > 0 ? Math.max(...this.catalogos.map(c => c.id)) + 1 : 1,
        ...formValue,
        fecha_creacion: new Date()
      };
      this.catalogos.push(nuevoCatalogo);
      this.toastrService.success('Catálogo creado correctamente', 'Éxito');
    }

    this.aplicarFiltros();
    this.cancelarEdicion();
  }

  eliminarCatalogo(catalogo: Catalogo): void {
    if (confirm(`¿Estás seguro de eliminar el catálogo "${catalogo.nombre}"?`)) {
      const index = this.catalogos.findIndex(c => c.id === catalogo.id);
      if (index !== -1) {
        this.catalogos.splice(index, 1);
        this.toastrService.success('Catálogo eliminado correctamente', 'Éxito');
        this.aplicarFiltros();
      }
    }
  }

  toggleDisponible(catalogo: Catalogo): void {
    catalogo.disponible = !catalogo.disponible;
    this.toastrService.success(
      `Catálogo ${catalogo.disponible ? 'activado' : 'desactivado'}`,
      'Estado actualizado'
    );
  }

  cancelarEdicion(): void {
    this.mostrarFormulario = false;
    this.catalogoEditando = null;
    this.catalogoForm.reset();
  }

  getCategoriaLabel(categoria: string): string {
    const cat = this.categorias.find(c => c.value === categoria);
    return cat ? cat.label : categoria;
  }

  getMockCatalogos(): Catalogo[] {
    return [
      {
        id: 1,
        nombre: 'Plan de Entrenamiento Personalizado',
        descripcion: 'Plan de entrenamiento diseñado específicamente para tus objetivos y nivel de condición física.',
        categoria: 'servicios',
        imagen_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
        precio: 99.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-01')
      },
      {
        id: 2,
        nombre: 'Kit de Pesas Ajustables',
        descripcion: 'Set completo de pesas ajustables de 2.5kg a 25kg, perfectas para entrenamiento en casa.',
        categoria: 'equipamiento',
        imagen_url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
        precio: 149.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-02')
      },
      {
        id: 3,
        nombre: 'Proteína Whey Premium',
        descripcion: 'Proteína de suero de leche de alta calidad, 2kg. Sabor chocolate.',
        categoria: 'suplementos',
        imagen_url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop',
        precio: 49.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-03')
      },
      {
        id: 4,
        nombre: 'Clases de Yoga Online',
        descripcion: 'Acceso ilimitado a clases de yoga en línea durante 1 mes.',
        categoria: 'servicios',
        imagen_url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
        precio: 29.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-04')
      },
      {
        id: 5,
        nombre: 'Camiseta Deportiva Técnica',
        descripcion: 'Camiseta transpirable y ligera, ideal para running y entrenamientos intensos.',
        categoria: 'ropa',
        imagen_url: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
        precio: 24.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-05')
      },
      {
        id: 6,
        nombre: 'Programa de CrossFit Avanzado',
        descripcion: 'Programa completo de 12 semanas para atletas avanzados de CrossFit.',
        categoria: 'deportes',
        imagen_url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
        precio: 79.99,
        disponible: true,
        fecha_creacion: new Date('2025-01-06')
      }
    ];
  }
}

