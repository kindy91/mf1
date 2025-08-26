import { Routes } from '@angular/router';
import { ExternalOverview } from './external-overview/external-overview';
import { ExternalDetails } from './external-details/external-details';

export const externalRoutes: Routes = [
    {
        path: '',
        component: ExternalOverview
    },
    {
        path: 'details',
        component: ExternalDetails
    }
];
