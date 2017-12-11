import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapBuilderViewComponent } from './admin/mapbuilder/mapbuilder.view';

export const ViewRoute: Routes = [
   {path: 'admin/maps', component: MapBuilderViewComponent}
];

export const viewRouting: ModuleWithProviders = RouterModule.forChild(ViewRoute);