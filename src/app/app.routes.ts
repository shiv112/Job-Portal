import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'notifications',
    loadComponent: () => import('./components/notifications/notifications.page').then( m => m.NotificationsPage)
  },
  {
    path: 'header',
    loadComponent: () => import('./shared/header/header.page').then( m => m.HeaderPage)
  },
  {
    path: 'footer',
    loadComponent: () => import('./shared/footer/footer.page').then( m => m.FooterPage)
  },   {
    path: 'messages',
    loadComponent: () => import('./components/messages/messages.page').then( m => m.MessagesPage)
  },
 
];



