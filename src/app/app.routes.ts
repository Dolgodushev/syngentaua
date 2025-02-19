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
  {
    path: 'fert',
    loadComponent: () => import('./pages/cp/fert/fert.page').then( m => m.FertPage)
  },
  {
    path: 'dezinf',
    loadComponent: () => import('./pages/cp/dezinf/dezinf.page').then( m => m.DezinfPage)
  },
  {
    path: 'rodent',
    loadComponent: () => import('./pages/cp/rodent/rodent.page').then( m => m.RodentPage)
  },
  {
    path: 'insect',
    loadComponent: () => import('./pages/cp/insect/insect.page').then( m => m.InsectPage)
  },
  {
    path: 'herb',
    loadComponent: () => import('./pages/cp/herb/herb.page').then( m => m.HerbPage)
  },
  {
    path: 'fung',
    loadComponent: () => import('./pages/cp/fung/fung.page').then( m => m.FungPage)
  },
  {
    path: 'retar',
    loadComponent: () => import('./pages/cp/retar/retar.page').then( m => m.RetarPage)
  },
];
