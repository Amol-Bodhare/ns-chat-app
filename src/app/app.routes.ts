import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/pages/home/home.component';
import { LoginComponent } from '@src/app/core/components/login/login.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'users',
    component: UsersPageComponent,
  }
];
