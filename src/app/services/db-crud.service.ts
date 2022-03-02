import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query, where } from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbCrudService {

  public data: any = [];
  private data$: Subject<any>;

  constructor(private db: Firestore, private notifications: HotToastService) {
    this.data = []
    this.data$ = new Subject();
  }

  addData(value: any){
    const dbInstance = collection(this.db, 'clientes');
    addDoc(dbInstance, value).then(() => {
      this.notifications.success('Se registro correctamente al cliente');
    }).catch((err) => {
      this.notifications.error('Error en el registro');
    });
  }

}
