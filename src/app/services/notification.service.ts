import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotificationModalComponent } from '../components/modal/notification-modal/notification-modal.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public dialog: MatDialog) { }

  openInquiryNotification() {
    const dialog = this.dialog.open(NotificationModalComponent, {
      width: '30%',
      data: {
        image: './../../assets/img/inquiry.png',
        title: '',
        paragraph1: 'Your inquiry has been sent!',
        paragraph2: 'We will reach out to you within 24 hours.'
      }
    });
  }

  openFeedbackNotification() {
    const dialog = this.dialog.open(NotificationModalComponent, {
      width: '30%',
      data: {
        image: './../../assets/img/feedback.png',
        title: '',
        paragraph1: 'Your message has been sent!',
        paragraph2: 'We will reach out to you within 24 hours.'
      }
    });
  }

  openSuggestionNotification() {
    const dialog = this.dialog.open(NotificationModalComponent, {
      width: '30%',
      data: {
        image: './../../assets/img/suggestion.png',
        title: '',
        paragraph1: 'Your course suggestion has been sent!',
        paragraph2: 'We will reach out to you within 24 hours.'
      }
    });
  }

  openCongratulationsNotification() {
    const dialog = this.dialog.open(NotificationModalComponent, {
      width: '50%',
      data: {
        image: './../../assets/img/congratulations.png',
        title: '',
        paragraph1: 'Your course suggestion has been sent!Your enrollment has been confirmed! Expect someone to reach out to you within 24 hours regarding the enrollment verification and class details.',
        paragraph2: 'Should you wish to cancel the enrollment, please notify us 3 days before the class begins.'
      }
    });
  }
}
