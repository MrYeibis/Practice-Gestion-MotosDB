import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActividadService } from 'src/app/services/cliente/actividad.service';

@Component({
  selector: 'app-agregar-actividad',
  templateUrl: './agregar-actividad.component.html',
  styleUrls: ['./agregar-actividad.component.scss']
})
export class AgregarActividadComponent implements OnInit {

  newActividad = new FormGroup({
    tipo: new FormControl('', [Validators.required])
  })

  constructor(public crud: ActividadService) { }

  ngOnInit(): void {
  }

}
