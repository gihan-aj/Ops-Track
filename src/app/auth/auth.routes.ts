import { Route } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const registerRoute: Route[] = [
  {
    path: 'log-in',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
