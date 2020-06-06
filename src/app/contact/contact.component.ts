import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedback = new FormGroup({
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

  suggestion = new FormGroup({
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
    topic: new FormControl('', [
      Validators.required
    ]),
    software: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // this.firebaseService.sendEmail('node', 'test').subscribe(res => {
    //   console.log('res', res);
    // });
  }

  feedbackSubmit() {
    const data = this.feedback.value;
    if (this.feedback.valid) {
      this.firebaseService.sendEmail('Feedback', data);
    }
  }

  suggestionSubmit() {
    const data = this.suggestion.value;
    if (this.suggestion.valid) {
      this.firebaseService.sendEmail('Feedback', data);
    }
  }
}
