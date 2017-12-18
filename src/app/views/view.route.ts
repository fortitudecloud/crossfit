import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapBuilderViewComponent } from './admin/mapbuilder/mapbuilder.view';
import { HomeViewComponent } from './client/home/home.view';
import { SetupViewComponent } from './client/setup/setup.view';

export const ViewRoute: Routes = [
   {path: 'admin/maps', component: MapBuilderViewComponent},
   {path: 'oauth2/:provider', component: SetupViewComponent},
   {path: 'home', component: HomeViewComponent}
];

export const viewRouting: ModuleWithProviders = RouterModule.forChild(ViewRoute);