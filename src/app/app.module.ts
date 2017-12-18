import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Routing
import { routing } from './app.route';

// Material Components
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

// Components
import { AppComponent } from './app.component';
import { ViewComponent } from './views/view.component';
import { MapMakerComponent } from './component/map/mapmaker/mapmaker.component';
import { MapViewerComponent } from './component/map/mapviewer/mapviewer.component';
import { LeaderComponent } from './component/user/leader/leader.component';

// Directives
import { ViewGroupDirective } from './directives/view-group.directive';

// Views
import { MapBuilderViewComponent } from './views/admin/mapbuilder/mapbuilder.view';
import { LandingViewComponent } from './views/client/landing/landing.view';
import { HomeViewComponent } from './views/client/home/home.view';
import { SetupViewComponent } from './views/client/setup/setup.view';

// Providers
import { Defaults } from './provider/defaults.provider';
import { FitbitProvider } from './provider/stub/fitbit.stub.provider'; // ! stub
import { DistanceProvider } from './provider/distance.provider';
import { HealthFactory } from './provider/health.factory';
import { UserStorage } from './provider/stub/storage/user.stub.storage'; // ! stub
import { AchievementsProvider } from './provider/stub/achievements.stub.provider'; // ! stub

@NgModule({
  declarations: [
    // Components
    AppComponent, MapBuilderViewComponent, ViewComponent, MapMakerComponent, LandingViewComponent,
    HomeViewComponent, MapViewerComponent, LeaderComponent, SetupViewComponent,
    // Directives
    ViewGroupDirective
  ],
  imports: [
    // Angular
    BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    // Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
    }),
    // Material
    MatProgressBarModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatSelectModule,
    MatInputModule,
    // App 
    routing
  ],
  providers: [
      Defaults, FitbitProvider, DistanceProvider, HealthFactory, UserStorage, AchievementsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
