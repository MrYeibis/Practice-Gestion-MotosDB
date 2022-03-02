import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbCrudService } from 'src/app/services/db-crud.service';


@Component({
  selector: 'app-cliente-registrar',
  templateUrl: './cliente-registrar.component.html',
  styleUrls: ['./cliente-registrar.component.scss']
})
export class ClienteRegistrarComponent implements OnInit {
  newCliente = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
    IDCliente: new FormControl('', [Validators.required]),
    NombreRS: new FormControl('', [Validators.required]),
    IDTipoActividad: new FormControl('', [Validators.required]),
    FechaIng: new FormControl('', [Validators.required]),
    Estado: new FormControl('', [Validators.required]),
    Observacion: new FormControl('', [Validators.required])
  });

  constructor(public crud: DbCrudService) { }

  ngOnInit() {
  }
  
}
