import { Routes } from '@angular/router';

import { ContainerComponent } from '@src/app/shared/container/container.component';

import { HomePage } from '@src/app/pages/home/home.page';
import { TodayPage } from '@src/app/pages/today/today.page';
import { RandomPage } from './pages/random/random.page';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: HomePage, },
  {
    path: 'app', component: ContainerComponent, children: [
        { path: '', redirectTo: '/today', pathMatch: 'full' },
        { path: 'today', component: TodayPage, },
        { path: 'random', component: RandomPage, },
    ]
  }
];
