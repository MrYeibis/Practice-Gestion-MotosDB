import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoService } from 'src/app/services/cliente/estado.service';

@Component({
  selector: 'app-agregar-estado',
  templateUrl: './agregar-estado.component.html',
  styleUrls: ['./agregar-estado.component.scss']
})
export class AgregarEstadoComponent implements OnInit {

  newEstado = new FormGroup({
    estado: new FormControl('', [Validators.required])
  })

  constructor(public crud: EstadoService) { }

  ngOnInit(): void {
  }

}
