import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DbCrudService } from 'src/app/services/db-crud.service';
import { DocumentoService } from 'src/app/services/cliente/documento.service';
import { ActividadService } from 'src/app/services/cliente/actividad.service';
import { EstadoService } from 'src/app/services/cliente/estado.service';

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

  public dData:any = [];
  public documentoData:any = [];

  public aData:any = [];
  public actividadData:any = [];

  public eData:any = [];
  public estadoData:any = [];

  constructor(public crud: DbCrudService, private documentoCrud:DocumentoService, 
    private actividadCrud:ActividadService, private estadoCrud:EstadoService) {
    this.documentoCrud.getData();
    this.actividadCrud.getData();
    this.estadoCrud.getData();
  }

  ngOnInit() {
    this.documentoCrud.getData$().subscribe( serviceData => {
      this.dData = serviceData;
      for(let item of this.dData){
        const esData = {
            value: item.tipo,
            label: item.tipo
          }
        this.documentoData.push(esData);
      }
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
  


}
