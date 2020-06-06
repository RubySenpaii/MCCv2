import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'app-inquiry-modal',
  templateUrl: './inquiry-modal.component.html',
  styleUrls: ['./inquiry-modal.component.css']
})
export class InquiryModalComponent {
  inquiry = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required
    ]),
    mobileNumber: new FormControl('', [
      Validators.required
    ]),
    city: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  constructor(public dialog: MatDialogRef<InquiryModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private firebaseService: FirebaseService) { }

  closeDialog() {
    this.dialog.close();
  }

  inquirySubmit() {
    const data = this.inquiry.value;
    if (this.inquiry.valid) {
      this.firebaseService.sendEmail('Feedback', data);
    }
  }
}
