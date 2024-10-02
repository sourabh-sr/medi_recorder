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
        path: 'patient-details',
        loadComponent: () => import('./patient-details/patient-details.component').then((x) => x.PatientDetailsComponent)
    },
    {
        path: '',
        component: LoginComponent
    }
];
