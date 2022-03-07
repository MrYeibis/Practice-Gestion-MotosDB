import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EstadoService } from 'src/app/services/cliente/estado.service';
import { DbCrudService } from 'src/app/services/db-crud.service';

@Component({
  selector: 'app-modificar-estado',
  templateUrl: './modificar-estado.component.html',
  styleUrls: ['./modificar-estado.component.scss']
})
export class ModificarEstadoComponent implements OnInit {

  public data: any = [];
  public obtuvoData:boolean = false;

  editEstado = new FormGroup({
    estado: new FormControl('', [Validators.required]),
  })

  searchEstado = new FormGroup({
    estado: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService,private crudDocument: EstadoService) { }

  ngOnInit(): void {
    this.crud.getData$().subscribe( serviceData => {
      this.data = serviceData;
    }) 
  }

  buscar(){
    const IDBusqueda = this.searchEstado.controls['estado'].value;
    this.crud.getData('estado', IDBusqueda, 'estado')
    this.obtuvoData = true;
  }

  actualizarData(){
    for(let item of this.data){
      this.crud.updateData(item.id.id, {
        estado: this.editEstado.controls['estado'].value
      },'estado');
      this.crud.getData('tipo', this.editEstado.controls['estado'].value, 'estado')
    }
  }

  delete(){
    for(let item of this.data){
      this.crudDocument.deleteData(item.id.id, 'estado');
    }
  }

}
