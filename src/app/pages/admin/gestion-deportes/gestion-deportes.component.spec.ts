import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeportesComponent } from './gestion-deportes.component';

describe('GestionDeportesComponent', () => {
  let component: GestionDeportesComponent;
  let fixture: ComponentFixture<GestionDeportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeportesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
