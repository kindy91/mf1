import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'external',
        loadChildren: () => import('./external/external.routes').then( m => m.externalRoutes )
    }
];
