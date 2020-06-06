import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProgramModalComponent } from './modal/program-modal/program-modal.component';
import { InquiryModalComponent } from './modal/inquiry-modal/inquiry-modal.component';
import { NotificationModalComponent } from './modal/notification-modal/notification-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ProgramModalComponent,
    InquiryModalComponent,
    NotificationModalComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
