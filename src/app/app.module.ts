import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

import { HomeComponent } from './home/home.component';
import { KurseviComponent } from './kursevi/kursevi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {DanceCourseService} from "./dance-course.service";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
    KurseviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatMenuModule
  ],
  providers: [DanceCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
