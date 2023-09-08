import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


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
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatDialog} from "@angular/material/dialog";
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider'
import { AddKursDialogComponent } from './kursevi/add-kurs-dialog/add-kurs-dialog.component';
import { MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { RemoveKursDialogComponent } from './kursevi/remove-kurs-dialog/remove-kurs-dialog.component';
import { EditKursDialogComponent } from './kursevi/edit-kurs-dialog/edit-kurs-dialog.component';
import { PlesoviComponent } from './plesovi/plesovi.component';
import {MatTableModule} from '@angular/material/table';
import { AddPlesDialogComponent } from './plesovi/add-ples-dialog/add-ples-dialog.component';
import {MatStepperModule} from '@angular/material/stepper';
import { GrupeComponent } from './grupe/grupe.component';
import {MatCardModule} from "@angular/material/card";
import { RasporedDialogComponent } from './grupe/raspored-dialog/raspored-dialog.component';
import { AddGrupaComponent } from './grupe/add-grupa/add-grupa.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from "@angular/material/core";
import { PrijaveComponent } from './prijave/prijave.component';
import { EditPrijavaDialogComponent } from './prijave/edit-prijava-dialog/edit-prijava-dialog.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeKorisnikComponent } from './home-korisnik/home-korisnik.component';
import { UspesnaPrijavaAlertDialogComponent } from './home-korisnik/uspesna-prijava-alert-dialog/uspesna-prijava-alert-dialog.component';
import { AddPrijavaDialogComponent } from './home-korisnik/add-prijava-dialog/add-prijava-dialog.component';
import { UspesnoDodatPlesDialogComponent } from './plesovi/uspesno-dodat-ples-dialog/uspesno-dodat-ples-dialog.component';
import { UspesnoIzmenjenaPrijavaDialogComponent } from './prijave/uspesno-izmenjena-prijava-dialog/uspesno-izmenjena-prijava-dialog.component';
import { NeuspesnoIzmenjenaPrijavaDialogComponent } from './prijave/neuspesno-izmenjena-prijava-dialog/neuspesno-izmenjena-prijava-dialog.component';
@NgModule({
  declarations: [
    AppComponent,


    HomeComponent,
    KurseviComponent,

    AddKursDialogComponent,
     RemoveKursDialogComponent,
     EditKursDialogComponent,
     PlesoviComponent,
     AddPlesDialogComponent,

     GrupeComponent,
      RasporedDialogComponent,
      AddGrupaComponent,
      PrijaveComponent,
      EditPrijavaDialogComponent,
      RegisterComponent,
      LoginComponent,
      HomeKorisnikComponent,
      UspesnaPrijavaAlertDialogComponent,
    AddPrijavaDialogComponent,
    UspesnoDodatPlesDialogComponent,
    UspesnoIzmenjenaPrijavaDialogComponent,
    NeuspesnoIzmenjenaPrijavaDialogComponent
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
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
      MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,

  ],
  providers: [DanceCourseService,MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
