import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DbCrudService } from 'src/app/services/db-crud.service';

@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.scss']
})

export class ClienteModificarComponent implements OnInit {

  public data: any = [];

  buscarData:string = 'clientes';

  IDBusqueda:string = '';

  modifyCliente = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
    IDCliente: new FormControl('', [Validators.required]),
    NombreRS: new FormControl('', [Validators.required]),
    IDTipoActividad: new FormControl('', [Validators.required]),
    FechaIng: new FormControl('', [Validators.required]),
    Estado: new FormControl('', [Validators.required]),
    Observacion: new FormControl('', [Validators.required])
  })

  editDocumento = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
  })

  searchCliente = new FormGroup({
    IDCliente: new FormControl('', [Validators.required]),
  })

  constructor(private crud: DbCrudService) {}

  ngOnInit(): void{
    this.crud.getData$().subscribe( serviceData => {
      this.data = serviceData;
    }) 
  }

  buscar(){
    this.IDBusqueda = this.searchCliente.controls['IDCliente'].value;
    this.crud.getData('IDCliente', this.IDBusqueda, this.buscarData)
  }

  select(){
    for(let item of this.data){
      this.modifyCliente.controls['IDTipoDocu'].setValue(item.IDTipoDocu);
      this.modifyCliente.controls['IDCliente'].setValue(item.IDCliente);
      this.modifyCliente.controls['NombreRS'].setValue(item.NombreRS);
      this.modifyCliente.controls['IDTipoActividad'].setValue(item.IDTipoActividad);
      this.modifyCliente.controls['FechaIng'].setValue(item.FechaIng);
      this.modifyCliente.controls['Estado'].setValue(item.Estado);
      this.modifyCliente.controls['Observacion'].setValue(item.Observacion);
    }
  }

  delete(){
    for(let item of this.data){
      this.crud.deleteData(item.id.id, this.buscarData);
    }
  }

}
