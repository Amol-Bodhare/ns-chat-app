import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/pages/home/home.component';
import { LoginComponent } from '@src/app/core/components/login/login.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  }
];
