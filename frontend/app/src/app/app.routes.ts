import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard.component';
import { AboutComponent } from './components/pages/about.component';
import { ListComponent } from './features/todos/components/list/list.component';
import { EntryComponent } from './features/todos/components/entry/entry.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./features/todos/todos.routes').then(
        (routes) => routes.todosRoutes
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
