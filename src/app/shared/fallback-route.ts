import { Route } from '@angular/router';

export const fallbackRoute: Route = {
  path: '**',
  redirectTo: '/page2', pathMatch: 'full'
};
