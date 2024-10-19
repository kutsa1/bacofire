import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {
  }


  read(collection: string): Observable<any> {
    return this.afs.collection(collection).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        // @ts-ignore
        return {id, ...data};
      }))
    );
  }

  create(collection: string, data: any): Promise<any> {
    console.log('data', data);
    console.log('collection', collection);
    return this.afs.collection(collection).add(data);
  }

  update(collection: string, id: string, data: any): Promise<void> {
    return this.afs.collection(collection).doc(id).update(data);
  }

  delete(collection: string, id: string): Promise<void> {
    return this.afs.collection(collection).doc(id).delete();
  }
  // list all collections name is not necessary
  listCollectionsByName(): Promise<any> {
    return this.afs.firestore.collection('test').get();
  }
}
