import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChoresComponent } from './chores/chores.component';

export const routes: Routes = [
  { path: 'chores', component: ChoresComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent, pathMatch: 'full' },
];
