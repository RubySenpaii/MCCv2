import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import programData from '../../assets/json/program.json';
import url from '../../assets/json/url.json';
import { Observable } from 'rxjs';

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

  sendEmail(subject, data): Observable<any> {
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url.firebase.sendEmail, { subject: subject, data: data }, { headers: header });
  }
}
