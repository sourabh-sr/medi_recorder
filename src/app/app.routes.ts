import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((x) => x.LoginComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((x) => x.DashboardComponent)
    },
    {
        path: 'patient-details/:patientId',
        loadComponent: () => import('./patient-details/patient-details.component').then((x) => x.PatientDetailsComponent)
    },
    {
        path: 'add-new-readings/:patientId',
        loadComponent: () => import('./add-new-readings/add-new-readings.component').then((x) => x.AddNewReadingsComponent)
    },
    {
        path: 'reports/:patientId',
        loadComponent: () => import('./patient-reports/patient-reports.component').then((x) => x.PatientReportsComponent)
    },
    {
        path: '',
        component: LoginComponent
    }
];
