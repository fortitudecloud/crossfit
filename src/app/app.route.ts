import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRoute } from './views/view.route';

import { MapBuilderViewComponent } from './views/admin/mapbuilder/mapbuilder.view';;

const appRoutes: Routes = [    
    {path: '', component: MapBuilderViewComponent},
    ...ViewRoute
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);