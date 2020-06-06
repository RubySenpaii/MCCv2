import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgramListComponent } from './list/list.component';
import { FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {
  @ViewChild(ProgramListComponent) programListComponent;
  programLevels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  programList = [];
  loading = true;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.getData().subscribe((res) => {
      res.forEach(val => {
        this.programList.push(val.payload.doc.data())
      })
      this.loading = false;
    });
    //this.firebaseService.createData();
  }

}
