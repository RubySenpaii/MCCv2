import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.component.html',
  styleUrls: ['./notification-modal.component.css']
})
export class NotificationModalComponent {

  constructor(public dialog: MatDialogRef<NotificationModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  closeDialog() {
    this.dialog.close();
  }
}
