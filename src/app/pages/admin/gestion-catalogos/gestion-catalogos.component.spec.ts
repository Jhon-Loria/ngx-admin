import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCatalogosComponent } from './gestion-catalogos.component';

describe('GestionCatalogosComponent', () => {
  let component: GestionCatalogosComponent;
  let fixture: ComponentFixture<GestionCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCatalogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

