import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActividadService } from 'src/app/services/cliente/actividad.service';
import { DbCrudService } from 'src/app/services/db-crud.service';

@Component({
  selector: 'app-modificar-actividad',
  templateUrl: './modificar-actividad.component.html',
  styleUrls: ['./modificar-actividad.component.scss']
})
export class ModificarActividadComponent implements OnInit {

  public data: any = [];
  public obtuvoData:boolean = false;

  editActvidad = new FormGroup({
    tipo: new FormControl('', [Validators.required]),
  })

  searchActividad = new FormGroup({
    tipo: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService,private crudDocument: ActividadService) { }

  ngOnInit(): void {
    this.crud.getData$().subscribe( serviceData => {
      this.data = serviceData;
    }) 
  }

  buscar(){
    const IDBusqueda = this.searchActividad.controls['tipo'].value;
    this.crud.getData('tipo', IDBusqueda, 'tipoActividad')
    this.obtuvoData = true;
  }

  actualizarData(){
    for(let item of this.data){
      this.crud.updateData(item.id.id, {
        tipo: this.editActvidad.controls['tipo'].value
      },'tipoActividad');
      this.crud.getData('tipo', this.editActvidad.controls['tipo'].value, 'tipoActividad')
    }
  }

  delete(){
    for(let item of this.data){
      this.crudDocument.deleteData(item.id.id, 'tipoActividad');
    }
  }

}
