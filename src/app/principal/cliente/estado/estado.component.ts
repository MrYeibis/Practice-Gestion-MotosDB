import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { EstadoService } from 'src/app/services/cliente/estado.service';
import { DbCrudService } from 'src/app/services/db-crud.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  public data: any = this.crud.data;
  public obtuvoData: boolean;
  public actualizoData: boolean;

  public eData:any = [];
  public estadoData:any = [];

  antData = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
    IDCliente: new FormControl('', [Validators.required]),
    NombreRS: new FormControl('', [Validators.required]),
    IDTipoActividad: new FormControl('', [Validators.required]),
    FechaIng: new FormControl('', [Validators.required]),
    Estado: new FormControl('', [Validators.required]),
    Observacion: new FormControl('', [Validators.required])
  })

  editEstado = new FormGroup({
    Estado: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService, private notifications: HotToastService,private estadoCrud:EstadoService) {
    this.obtuvoData = false;
    this.actualizoData = false;
    this.estadoCrud.getData();
  }

  ngOnInit(): void {
    this.crud.getData$().subscribe(serviceData =>{
      this.data = serviceData;
    })

    this.estadoCrud.getData$().subscribe( serviceData => {
      this.eData = serviceData;
      for(let item of this.eData){
        const esData = {
            value: item.estado,
            label: item.estado
          }
        this.estadoData.push(esData);
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
        Estado: this.editEstado.controls['Estado'].value
      },'clientes');
      this.crud.getData('IDCliente', item.IDCliente, 'clientes')
      this.actualizoData = true;
      console.log(this.data)
    }
  }

}
