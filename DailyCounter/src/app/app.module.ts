import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';

import { HttpClientModule } from '@angular/common/http';
import { LinkChartComponent } from './link-chart/link-chart.component';
import { DaySelectorComponent } from './day-selector/day-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LinkChartComponent,
    DaySelectorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
