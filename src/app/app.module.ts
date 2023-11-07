import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DarkModeComponent } from './header/dark-mode/dark-mode.component';
import { SidebarComponent } from './header/sub-header/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    HeaderComponent,
    SubHeaderComponent,
    DarkModeComponent,
    SidebarComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
