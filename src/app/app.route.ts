import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoute } from './views/view.route';

import { MapBuilderViewComponent } from './views/admin/mapbuilder/mapbuilder.view';;
import { LandingViewComponent } from './views/client/landing/landing.view';

const appRoutes: Routes = [    
    {path: '', component: LandingViewComponent},
    ...ViewRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);