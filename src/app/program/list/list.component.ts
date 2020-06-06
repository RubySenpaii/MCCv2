import { Component, OnInit, Input } from '@angular/core';
import { ProgramModalComponent } from '../../components/modal/program-modal/program-modal.component';
import { Program } from '../../interfaces/program';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-program-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ProgramListComponent implements OnInit {
  @Input() programLevel: string;
  @Input() programList: Program[];
  filteredList = [];

  constructor() { }

  ngOnInit(): void {
    if (this.programLevel == 'All') {
      this.filteredList = this.programList;
    } else {
      this.programList.forEach(program => {
        if (program.ProgramType == this.programLevel) {
          this.filteredList.push(program);
        }
      });
    }
  }

}

@Component({
  selector: 'app-program-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class ProgramGridComponent implements OnInit {
  @Input() program: Program;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showDetails(data) {
    const dialog = this.dialog.open(ProgramModalComponent, {
      width: '70%',
      data: data
    });
  }

}