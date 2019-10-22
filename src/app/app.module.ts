import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { material } from "./material/app.material";
import { AppComponent } from './app.component';
import "@angular/material/prebuilt-themes/indigo-pink.css";
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { InsideViewComponent } from './inside-view/inside-view.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    InsideViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    LayoutModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
