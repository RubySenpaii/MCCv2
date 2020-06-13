import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormGroup, NgForm, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { PaymongoService } from '../../services/paymongo.service';
import { ProgramService } from '../../services/program.service';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification.service';
import { FirebaseService } from 'app/services/firebase.service';
import { ErrorStateMatcher } from '@angular/material/core';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /\+639\d\d\d\d\d\d\d\d\d/;
const EXPIRATION_REGEX = /[0][1-9]\/[2]\d|[1][0-2]\/[2]\d/;


export class CardValidation implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const cardNumber = control.value;
    const cardString = cardNumber.toString();
    let nCheck = 0, bEven = false;

    for (var n = cardString.length - 1; n >= 0; n--) {
      var cDigit = cardString.charAt(n),
        nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }
    return (control && !((nCheck % 10) == 0) || control.invalid);
  }
};

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class ProgramEnrollComponent implements OnInit {
  enrollment = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    birthday: new FormControl('', [
      Validators.required
    ]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.pattern(MOBILE_REGEX),
      Validators.maxLength(13)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    parent: new FormControl('', []),
    parentMobile: new FormControl('', []),
    parentEmail: new FormControl('', []),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new FormControl('', [
      Validators.required,
      Validators.pattern(EXPIRATION_REGEX),
      Validators.minLength(5),
      Validators.maxLength(5)
    ]),
    cvc: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
    paymentOption: new FormControl('', [
      Validators.required
    ])
  });
  isSelf = false;
  programData;
  timeSlot;

  constructor(private paymongoService: PaymongoService, private programService: ProgramService,
    private router: Router, private notificationService: NotificationService, private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.programData = this.programService.programDetails;
    this.timeSlot = this.programService.timeSlot;
    console.log('programdata', this.programData)
    if (typeof this.programData == 'undefined' || this.timeSlot == 'undefined') {
      this.router.navigateByUrl('/program');
    }
  }

  enrollmentSubmit() {
    if (this.enrollment.valid) {
      this.notificationService.showLoading();
      const paymentMethod = this.enrollment.value.paymentOption;
      this.paymongoService.createPaymentIntent(paymentMethod, 10000).subscribe(res => {
        const intentId = res.data.id;
        const expiration = this.enrollment.value.expiration;
        const paymentInfo = {
          cardNumber: this.enrollment.value.cardNumber,
          month: Number(expiration.split('/')[0]),
          year: Number(expiration.split('/')[1]),
          cvc: this.enrollment.value.cvc
        };
        this.paymongoService.createPaymentMethod(paymentMethod, paymentInfo).subscribe(res => {
          const paymentId = res.data.id;
          this.paymongoService.makePayment(intentId, paymentId).subscribe(res => {
            this.notificationService.closeLoading();
            const body = {
              name: this.enrollment.value.name,
              mobile: this.enrollment.value.name,
              email: this.enrollment.value.name,
              address: this.enrollment.value.name,
              course: this.programData.ProgramName,
              timeslot: this.timeSlot
            };
            this.firebaseService.sendEmail('Registration', body);
            this.notificationService.openCongratulationsNotification();
          });
        }, e => {
          console.error(e);
          this.notificationService.closeLoading();
          this.notificationService.showError();
        });
      }, e => {
        console.error(e);
        this.notificationService.closeLoading();
        this.notificationService.showError();
      });
    }
  }

  cardVal = new CardValidation();
}
