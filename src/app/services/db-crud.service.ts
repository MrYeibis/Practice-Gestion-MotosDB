import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query, where, updateDoc, doc, deleteDoc} from '@angular/fire/firestore';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DbCrudService {

  private data: any = [];
  private data$: Subject<any[]>;

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

  getData(find: string){
    const q = query(collection(this.db, 'clientes'), where('IDCliente', '==', find))
    getDocs(q).then((response) => {
      this.data = [...response.docs.map((item) => {
        return {...item.data(), id:item}
      })]
      this.data$.next(this.data);
    })
  }

  getData$(): Observable<any[]>{
    return this.data$.asObservable();
  }

  updateData(id: string, changedata: any){
    const dataToUpdate = doc(this.db, 'clientes', id);
    updateDoc(dataToUpdate, {
      changedata
    }).then(() => {
      this.notifications.success('Se actualizo correctamente la información');
    }).catch((err) => {
      this.notifications.error('Error en la actualización');
    });
  }

  deleteData(id: string){
    const dataToDelete = doc(this.db, 'clientes', id);
    deleteDoc(dataToDelete).then(() => {
      this.notifications.success('Se elimino correctamente el cliente');
    }).catch((err) => {
      this.notifications.error('Error en el proceso');
    });
  }

}
