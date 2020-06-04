import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { AboutComponent } from '../../about/about.component';
import { ContactComponent } from '../../contact/contact.component';
import { FaqComponent } from '../../faq/faq.component';
import { ProgramComponent } from '../../program/program.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',    component: HomeComponent },
    { path: 'about',   component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'faq',     component: FaqComponent },
    { path: 'program', component: ProgramComponent },
];
