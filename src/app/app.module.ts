import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Routing
import { routing } from './app.route';

// Material Components
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

// Components
import { AppComponent } from './app.component';
import { ViewComponent } from './views/view.component';
import { MapMakerComponent } from './component/map/mapmaker/mapmaker.component';

// Directives
import { ViewGroupDirective } from './directives/view-group.directive';

// Views
import { MapBuilderViewComponent } from './views/admin/mapbuilder/mapbuilder.view';

// Providers
import { Defaults } from './provider/defaults.provider';


@NgModule({
  declarations: [
    // Components
    AppComponent, MapBuilderViewComponent, ViewComponent, MapMakerComponent,
    // Directives
    ViewGroupDirective
  ],
  imports: [
    // Angular
    BrowserModule, CommonModule, FormsModule, BrowserAnimationsModule,
    // Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
    }),
    // Material
    MatProgressBarModule, MatTabsModule, MatTableModule,
    // App 
    routing
  ],
  providers: [
      Defaults
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
