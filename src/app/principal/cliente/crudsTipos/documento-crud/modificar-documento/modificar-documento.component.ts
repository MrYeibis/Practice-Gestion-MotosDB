import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocumentoService } from 'src/app/services/cliente/documento.service';
import { DbCrudService } from 'src/app/services/db-crud.service';

@Component({
  selector: 'app-modificar-documento',
  templateUrl: './modificar-documento.component.html',
  styleUrls: ['./modificar-documento.component.scss']
})
export class ModificarDocumentoComponent implements OnInit {

  public data: any = [];
  public obtuvoData:boolean = false;

  editDocument = new FormGroup({
    tipo: new FormControl('', [Validators.required]),
  })

  searchDocumento = new FormGroup({
    tipo: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService,private crudDocument: DocumentoService) { }

  ngOnInit(): void {
    this.crud.getData$().subscribe( serviceData => {
      this.data = serviceData;
    }) 
  }

  buscar(){
    const IDBusqueda = this.searchDocumento.controls['tipo'].value;
    this.crud.getData('tipo', IDBusqueda, 'tipoDocumento')
    this.obtuvoData = true;
  }

  actualizarData(){
    for(let item of this.data){
      this.crud.updateData(item.id.id, {
        tipo: this.editDocument.controls['tipo'].value
      },'tipoDocumento');
      this.crud.getData('tipo', this.editDocument.controls['tipo'].value, 'tipoDocumento')
    }
  }

  delete(){
    for(let item of this.data){
      this.crudDocument.deleteData(item.id.id, 'tipoDocumento');
    }
  }

}
