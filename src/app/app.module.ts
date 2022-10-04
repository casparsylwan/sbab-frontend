import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './busLineMap/map/map.component';
import { BusTableComponent } from './busTable/bus-table/bus-table.component';
import { BusStopTableComponent } from './busTable/bus-stop-table/bus-stop-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    BusTableComponent,
    BusStopTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LeafletModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
