import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import programData from '../../assets/json/program.json';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // createData() {
  //   console.log(programData);
  //   programData.forEach(data => {
  //     this.firestore.collection('programs').add(data).then(res => {console.log(res)}, err => {console.log(err)});
  //   });
  // }

  getData() {
    return this.firestore.collection('programs').snapshotChanges();
  }
}
