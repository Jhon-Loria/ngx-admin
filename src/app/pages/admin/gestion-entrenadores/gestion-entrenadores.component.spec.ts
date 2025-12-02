import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEntrenadoresComponent } from './gestion-entrenadores.component';

describe('GestionEntrenadoresComponent', () => {
  let component: GestionEntrenadoresComponent;
  let fixture: ComponentFixture<GestionEntrenadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEntrenadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEntrenadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
