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
  {
    path: 'profile',
    loadComponent: () => import('./components/profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'message-detail',
    loadComponent: () => import('./components/message-detail/message-detail.page').then( m => m.MessageDetailPage)
  },
  {
    path: 'company-details',
    loadComponent: () => import('./components/company-details/company-details.page').then( m => m.CompanyDetailsPage)
  },
  {
    path: 'job-details',
    loadComponent: () => import('./components/job-details/job-details.page').then( m => m.JobDetailsPage)
  },
  {
    path: 'apply-form',
    loadComponent: () => import('./components/apply-form/apply-form.page').then( m => m.ApplyFormPage)
  },
 
];



