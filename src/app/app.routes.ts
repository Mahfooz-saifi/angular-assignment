import { Routes } from '@angular/router';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { SopComponent } from './components/sop/sop.component';
import { ClientComponent } from './components/client/client.component';

export const routes: Routes = [
    { path: 'client', component: ClientComponent },
    { path: 'loan-app', component: LoanApplicationComponent },
    { path: 'sop', component: SopComponent },
];
