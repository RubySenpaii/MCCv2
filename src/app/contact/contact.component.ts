import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { NotificationService } from '../services/notification.service';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /\+639\d\d\d\d\d\d\d\d\d/;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedback = new FormGroup({
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

  suggestion = new FormGroup({
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
      Validators.maxLength(13)
    ]),
    city: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    topic: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    software: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(240)
    ])
  });

  constructor(private firebaseService: FirebaseService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    // this.firebaseService.sendEmail('node', 'test').subscribe(res => {
    //   console.log('res', res);
    // });
  }

  feedbackSubmit() {
    const data = this.feedback.value;
    if (this.feedback.valid) {
      this.firebaseService.sendEmail('Feedback', data).subscribe((res) => {
        console.log(res);
        this.notificationService.openFeedbackNotification();
      }, e => {
        console.log(e);
      });
    }
  }

  suggestionSubmit() {
    const data = this.suggestion.value;
    if (this.suggestion.valid) {
      this.firebaseService.sendEmail('Feedback', data).subscribe((res) => {
        this.notificationService.openSuggestionNotification();
      }, e => {
        console.log(e);
      });
    }
  }
}
