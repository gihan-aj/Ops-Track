import { Route } from '@angular/router';
import { DepartmentsComponent } from './components/departments/departments.component';

export const registerRoute: Route[] = [
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
];
