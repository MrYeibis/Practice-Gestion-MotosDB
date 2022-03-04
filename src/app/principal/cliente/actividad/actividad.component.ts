import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { DbCrudService } from 'src/app/services/db-crud.service';
import { ActividadService } from 'src/app/services/cliente/actividad.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  public data: any = this.crud.data;
  public obtuvoData: boolean;
  public actualizoData: boolean;

  public aData:any = [];
  public actividadData:any = [];

  antData = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
    IDCliente: new FormControl('', [Validators.required]),
    NombreRS: new FormControl('', [Validators.required]),
    IDTipoActividad: new FormControl('', [Validators.required]),
    FechaIng: new FormControl('', [Validators.required]),
    Estado: new FormControl('', [Validators.required]),
    Observacion: new FormControl('', [Validators.required])
  })

  editActividad = new FormGroup({
    IDTipoActividad: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService, private notifications: HotToastService,
    private actividadCrud:ActividadService) {
      this.actividadCrud.getData();
      this.obtuvoData = false;
      this.actualizoData = false;
  }

  ngOnInit(): void {
    this.crud.getData$().subscribe(serviceData =>{
      this.data = serviceData;
    })

    this.actividadCrud.getData$().subscribe( serviceData => {
      this.aData = serviceData;
      for(let item of this.aData){
        const esData = {
            value: item.tipo,
            label: item.tipo
          }
        this.actividadData.push(esData);
      }
    }) 
  }

  ObtenerData(){
    for(let item of this.data){
      this.antData.controls['IDTipoDocu'].setValue(item.IDTipoDocu);
      this.antData.controls['IDCliente'].setValue(item.IDCliente);
      this.antData.controls['NombreRS'].setValue(item.NombreRS);
      this.antData.controls['IDTipoActividad'].setValue(item.IDTipoActividad);
      this.antData.controls['FechaIng'].setValue(item.FechaIng);
      this.antData.controls['Estado'].setValue(item.Estado);
      this.antData.controls['Observacion'].setValue(item.Observacion);
     }
    this.notifications.success('Información obtenida correctamente')
    this.obtuvoData = true;
    }

  actualizarData(){
  for(let item of this.data){
    this.crud.updateData(item.id.id, {
      IDTipoActividad: this.editActividad.controls['IDTipoActividad'].value
    },'clientes');
    this.crud.getData('IDCliente', item.IDCliente, 'clientes')
    this.actualizoData = true;
    console.log(this.data)
    }
  }

}
