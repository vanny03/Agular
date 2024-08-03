import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [

  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' }, // default route to login page

  { path: 'login', 
    component: LoginComponent
 },

  {
    path: '',
    component: HomeComponent,
    children: [
        { 
            path: 'dashboard', 
            component: DashboardComponent 
        }
    ],
  },
];
