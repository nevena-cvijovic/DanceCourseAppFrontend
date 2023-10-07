import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AxiosService} from "../axios.service";
import {Korisnik} from "../model/korisnik-model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {
  UspesnoKreiranNalogDialogComponent
} from "./register/uspesno-kreiran-nalog-dialog/uspesno-kreiran-nalog-dialog.component";
import {
  NeuspesnoKreiranNalogDialogComponent
} from "./register/neuspesno-kreiran-nalog-dialog/neuspesno-kreiran-nalog-dialog.component";
import {
  NeuspesnoLogovanjeDialogComponent
} from "./login/neuspesno-logovanje-dialog/neuspesno-logovanje-dialog.component";
import {UspesnoLogovanjeDialogComponent} from "./login/uspesno-logovanje-dialog/uspesno-logovanje-dialog.component";


export interface KorisnikData{
  idKorisnika?: number;
  ime?: string;
  prezime?: string;
  datumRodjenja?: Date;
  kontaktTelefon?: string;
  mejl?: string;
  korisnickoIme: string;
  lozinka: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService{
  private apiServiceUrl = environment.apiBaseUrl;
  public korisnik:Korisnik;
  constructor(private http: HttpClient, private axiosService: AxiosService, public router: Router, public dialog: MatDialog) { }
  private _isUserAuthenticated = false;

isLoggedIn(){
    return !!localStorage.getItem('auth_token');
}

getKorisnik(){
  if(this.korisnik!=null){
    return this.korisnik;
  }
  return null;
}
logIn(korisnickoIme:string, lozinka:string):Korisnik{
  this._isUserAuthenticated = true;
  this.axiosService.request(
    "POST",
    "/auth/login",
    {
      korisnickoIme: korisnickoIme,
      lozinka: lozinka
    }
  ).then(
    response => {
      this.axiosService.setAuthToken(response.data.token);
      this.korisnik= response.data;
      console.log(this.korisnik);
      //this.dialog.open(UspesnoLogovanjeDialogComponent);
    }).catch(
    (error) => {
      this.axiosService.setAuthToken(null);
      this.dialog.open(NeuspesnoLogovanjeDialogComponent);
      this.korisnik=null;

    }
  );
  return this.korisnik;
}
logOut(){
  this.axiosService.setAuthToken(null);
  this.korisnik = null;
  this.router.navigateByUrl("");
}
  register(kor: Korisnik) {
    this._isUserAuthenticated = true;
    this.axiosService.request(
      "POST",
      "/auth/register",
      {
        ime: kor.ime,
        prezime:kor.prezime,
        kontaktTelefon:kor.kontaktTelefon,
        datumRodjenja: kor.datumRodjenja,
        mejl: kor.mejl,
        korisnickoIme: kor.korisnickoIme,
        lozinka: kor.lozinka
      }).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
this.korisnik = response.data;
        this.dialog.open(UspesnoKreiranNalogDialogComponent);
      }).catch(
      (error) => {
        this.axiosService.setAuthToken(null);
        this.dialog.open(NeuspesnoKreiranNalogDialogComponent);
        this.korisnik=null;
      }
    );
    return this.korisnik;
  }
}
