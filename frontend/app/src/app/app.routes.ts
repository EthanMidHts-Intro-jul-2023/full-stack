import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard.component';
import { AboutComponent } from './components/pages/about.component';

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
    path: '**',
    redirectTo: 'dashboard',
  },
];
