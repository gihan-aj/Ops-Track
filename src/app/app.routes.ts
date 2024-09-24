import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'configuration',
    component: ConfigurationComponent,
  },
  {
    path: 'configuration',
    loadChildren: () =>
      import('./configuration/configuration.routes').then(
        (m) => m.registerRoute
      ),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routes').then((m) => m.registerRoute),
  },
  {
    path: '**',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];
