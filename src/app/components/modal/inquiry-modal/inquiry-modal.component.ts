import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-inquiry-modal',
  templateUrl: './inquiry-modal.component.html',
  styleUrls: ['./inquiry-modal.component.css']
})
export class InquiryModalComponent {

  constructor(public dialog: MatDialogRef<InquiryModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog() {
    this.dialog.close();
  }
}
