import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteModificarDocumentoComponent } from './cliente-modificar-documento.component';

describe('ClienteModificarDocumentoComponent', () => {
  let component: ClienteModificarDocumentoComponent;
  let fixture: ComponentFixture<ClienteModificarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteModificarDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteModificarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
