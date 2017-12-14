import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapBuilderViewComponent } from './admin/mapbuilder/mapbuilder.view';
import { HomeViewComponent } from './client/home/home.view';

export const ViewRoute: Routes = [
   {path: 'admin/maps', component: MapBuilderViewComponent},
   {path: 'home', component: HomeViewComponent}
];

export const viewRouting: ModuleWithProviders = RouterModule.forChild(ViewRoute);