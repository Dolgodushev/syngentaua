import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'cp',
    loadComponent: () => import('./pages/cp/cp.page').then( m => m.CpPage)
  },
  {
    path: 'seeds',
    loadComponent: () => import('./pages/seeds/seeds.page').then( m => m.SeedsPage)
  },
  {
    path: 'finance',
    loadComponent: () => import('./pages/finance/finance.page').then( m => m.FinancePage)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.page').then( m => m.ContactsPage)
  },
];
