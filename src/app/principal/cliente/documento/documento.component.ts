import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { DbCrudService } from 'src/app/services/db-crud.service';
import { DocumentoService } from 'src/app/services/cliente/documento.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {

  public data: any = this.crud.data;
  public obtuvoData: boolean;
  public actualizoData: boolean;

  public dData:any = [];
  public documentoData:any = [];

  antData = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required]),
    IDCliente: new FormControl('', [Validators.required]),
    NombreRS: new FormControl('', [Validators.required]),
    IDTipoActividad: new FormControl('', [Validators.required]),
    FechaIng: new FormControl('', [Validators.required]),
    Estado: new FormControl('', [Validators.required]),
    Observacion: new FormControl('', [Validators.required])
  })

  editDocument = new FormGroup({
    IDTipoDocu: new FormControl('', [Validators.required])
  })

  constructor(private crud: DbCrudService, private notifications: HotToastService, 
    private documentoCrud: DocumentoService) {
    this.obtuvoData = false;
    this.actualizoData = false;
    this.documentoCrud.getData()
  }

  ngOnInit(): void {
    this.crud.getData$().subscribe(serviceData =>{
      this.data = serviceData;
    })

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
        IDTipoDocu: this.editDocument.controls['IDTipoDocu'].value
      },'clientes');
      this.crud.getData('IDCliente', item.IDCliente, 'clientes')
      this.actualizoData = true;
      console.log(this.data)
    }
  }
}
