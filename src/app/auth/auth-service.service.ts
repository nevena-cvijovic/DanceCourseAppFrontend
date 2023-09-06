import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AxiosService} from "../axios.service";


export interface Korisnik{
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
  korisnik:Korisnik;
  constructor(private http: HttpClient, private axiosService: AxiosService) { }
  private _isUserAuthenticated = false;

isLoggedIn(){
    return !!localStorage.getItem('auth_token');
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

    }).catch(
    error => {
      this.axiosService.setAuthToken(null);


    }
  );
  return this.korisnik;
}
logOut(){
  this.axiosService.setAuthToken(null);
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

      }).catch(
      error => {
        this.axiosService.setAuthToken(null);

      }
    );
  }
}
