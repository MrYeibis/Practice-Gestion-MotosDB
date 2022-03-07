import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDocumentoComponent } from './modificar-documento.component';

describe('ModificarDocumentoComponent', () => {
  let component: ModificarDocumentoComponent;
  let fixture: ComponentFixture<ModificarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
