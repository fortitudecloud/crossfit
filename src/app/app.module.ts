import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

// Routing
import { routing } from './app.route';

// Components
import { AppComponent } from './app.component';

// Views
import { MapBuilderViewComponent } from './views/admin/mapbuilder/mapbuilder.view';


@NgModule({
  declarations: [
    AppComponent, MapBuilderViewComponent
  ],
  imports: [
    BrowserModule, CommonModule, FormsModule, routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBCVJPfwKSgIrz0VWZDL6LNUWMK7M6oR_w'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
