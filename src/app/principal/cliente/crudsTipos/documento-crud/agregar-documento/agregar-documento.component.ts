import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentoService } from 'src/app/services/cliente/documento.service';

@Component({
  selector: 'app-agregar-documento',
  templateUrl: './agregar-documento.component.html',
  styleUrls: ['./agregar-documento.component.scss']
})
export class AgregarDocumentoComponent implements OnInit {

  newDocument = new FormGroup({
    tipo: new FormControl('', [Validators.required])
  })

  constructor(public crud: DocumentoService) { }

  ngOnInit(): void {
  }

}
