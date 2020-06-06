import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { InquiryModalComponent } from '../inquiry-modal/inquiry-modal.component';
import { ProgramService } from '../../../services/program.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-modal',
  templateUrl: './program-modal.component.html',
  styleUrls: ['./program-modal.component.css']
})
export class ProgramModalComponent {
  selectedValue = "";

  constructor(public dialog: MatDialogRef<ProgramModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    public inquiryDialog: MatDialog, private programService: ProgramService, private router: Router) { }

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

  enrollPage() {
    if (this.selectedValue != "") {
      this.programService.programDetails = this.data;
      this.programService.timeSlot = this.selectedValue;
      this.dialog.close();
      this.router.navigateByUrl('/enroll');
    }
  }
}
