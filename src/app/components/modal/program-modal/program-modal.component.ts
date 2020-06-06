import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InquiryModalComponent } from '../inquiry-modal/inquiry-modal.component';

@Component({
  selector: 'app-program-modal',
  templateUrl: './program-modal.component.html',
  styleUrls: ['./program-modal.component.css']
})
export class ProgramModalComponent {
  timeSlots = ['M:F : 09:00AM - 10:00 AM', 'M:F : 10:00AM - 11:00 AM', 'M:F : 11:00AM - 12:00 PM', 'M:F : 12:00PM - 01:00 PM',
    'M:F : 01:00PM - 02:00 PM', 'M:F : 02:00PM - 03:00 PM', 'M:F : 03:00PM - 04:00 PM', 'M:F : 04:00PM - 05:00 PM', 'M:F : 05:00PM - 06:00 PM'];

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
