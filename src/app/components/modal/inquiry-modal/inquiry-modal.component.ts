import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';
import { FirebaseService } from '../../../services/firebase.service';
import { NotificationService } from 'app/services/notification.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /.+639\d\d\d\d\d\d\d\d\d\d/;

@Component({
  selector: 'app-inquiry-modal',
  templateUrl: './inquiry-modal.component.html',
  styleUrls: ['./inquiry-modal.component.css']
})
export class InquiryModalComponent {
  inquiry = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(MOBILE_REGEX),
      Validators.minLength(13),
      Validators.maxLength(13)
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(240)
    ])
  });

  constructor(public dialog: MatDialogRef<InquiryModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private firebaseService: FirebaseService, private notificationService: NotificationService) { }

  closeDialog() {
    this.dialog.close();
  }

  inquirySubmit() {
    const data = this.inquiry.value;
    if (this.inquiry.valid) {
      this.firebaseService.sendEmail('Feedback', data).subscribe((res) => {
        this.notificationService.openSuggestionNotification();
      }, e => {
        console.log(e);
      });
    }
  }
}
