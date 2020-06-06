import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import programData from '../../assets/json/program.json';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  // createData() {
  //   console.log(programData);
  //   programData.forEach(data => {
  //     this.firestore.collection('programs').add(data).then(res => {console.log(res)}, err => {console.log(err)});
  //   });
  // }

  getData() {
    return this.firestore.collection('programs').snapshotChanges();
  }

  sendEmail(subject, data) {
    return this.http.post('https://us-central1-manilacodingcamp.cloudfunctions.net/sendMail', { subject: subject, data: data });
  }
}
