import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InquiryModalComponent } from '../inquiry-modal/inquiry-modal.component';

@Component({
  selector: 'app-program-modal',
  templateUrl: './program-modal.component.html',
  styleUrls: ['./program-modal.component.css']
})
export class ProgramModalComponent {
  selectedValue: string;

  constructor(public dialog: MatDialogRef<ProgramModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public inquiryDialog: MatDialog) { }

  showInquiryDialog() {
    this.dialog.close();
    const inquiry = this.inquiryDialog.open(InquiryModalComponent, {
      width: '70%',
      data: this.data
    });
  }

  closeDialog() {
    this.dialog.close();
  }

  toggleButton(event) {
    console.log('event', event);
  }
}
