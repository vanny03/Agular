import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';


export const routes: Routes = [

  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' }, // default route to login page

  { path: 'login', 
    component: LoginComponent
 },

  {
    path: '',
    component: NavbarComponent,
    children: [
        { 
            path: 'home', 
            component: HomeComponent 
        },

        {
          path: 'products', 
          component: ProductComponent 
        },

        {
          path: 'contactUs', 
          component: ContactUsComponent
        }
    ],
  },
];
