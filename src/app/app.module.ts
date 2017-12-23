import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
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
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { AppComponent } from './app.component';
import { ViewComponent } from './views/view.component';
import { MapMakerComponent } from './component/map/mapmaker/mapmaker.component';
import { MapViewerComponent } from './component/map/mapviewer/mapviewer.component';
import { LeaderComponent } from './component/user/leader/leader.component';
import { CheckinComponent } from './component/dialogs/checkin/checkin.component';
import { CollectionComponent } from './component/dialogs/collection/collection.component';
import { CardsComponent } from './component/user/cards/cards.component';
import { AccountComponent } from './component/dialogs/account/account.component';

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
import { AchievementStorage } from './provider/stub/storage/achievement.stub.storage'; // ! stub
import { PokerStorage } from './provider/stub/storage/poker.stub.storage'; // ! stub
import { PokerCardProvider } from './provider/stub/pokercard.stub.provider'; // ! stub

@NgModule({
  entryComponents: [CheckinComponent, CollectionComponent, AccountComponent],
  declarations: [
    // Components
    AppComponent, MapBuilderViewComponent, ViewComponent, MapMakerComponent, LandingViewComponent,
    HomeViewComponent, MapViewerComponent, LeaderComponent, SetupViewComponent, CheckinComponent,
    CollectionComponent, CardsComponent, AccountComponent,
    // Directives
    ViewGroupDirective
  ],
  imports: [
    // Angular
    BrowserModule, CommonModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule,
    HttpModule, JsonpModule,
    // Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
    }),
    // Material
    MatProgressBarModule, MatTabsModule, MatTableModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDialogModule,
    // App 
    routing
  ],
  providers: [
      Defaults, FitbitProvider, DistanceProvider, HealthFactory, UserStorage, AchievementsProvider,
      AchievementStorage, PokerStorage, PokerCardProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
