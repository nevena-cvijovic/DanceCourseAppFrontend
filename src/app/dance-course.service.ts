import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {Ples} from "./model/ples-model";
import {Kurs} from "./model/kurs-model";
import {Korisnik} from "./model/korisnik-model";
import {Grupa} from "./model/grupa-model";
import {RasporedKursa} from "./model/raspored-kursa-model";
import {Prijava} from "./model/prijava-model";



@Injectable({
  providedIn: 'root'
})
export class DanceCourseService {

  private apiServiceUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  //METODE ZA SVE OBJEKTE

  //PLES

  //READ
  public vratiPlesove(): Observable<Ples[]> {
    return this.http.get<Ples[]>(`${this.apiServiceUrl}/ples/all`);
  }

  //CREATE
  public dodajPles(ples: Ples): Observable<Ples>{
    return this.http.post<Ples>(`${this.apiServiceUrl}/ples/add`,ples);
  }

  //UPDATE
  public izmeniPles(ples:Ples): Observable<Ples>{
    return this.http.put<Ples>(`${this.apiServiceUrl}/ples/update`,ples);
  }

  //DELETE
  public izbrisiPles(plesId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/ples/delete/${plesId}`);
  }

  //////////////////////////////////////
  //KURS
////////////////////////////////////////
  //READ
  public vratiKurseve(): Observable<Kurs[]>{
    return this.http.get<Kurs[]>(`${this.apiServiceUrl}/kurs/all`);
  }
//CREATE
  public dodajKurs(kurs: Kurs): Observable<Kurs>{
    return this.http.post<Kurs>(`${this.apiServiceUrl}/kurs/add`,kurs);
  }
  //UPDATE
  public izmeniKurs(kurs:Kurs): Observable<Kurs>{
    return this.http.put<Kurs>(`${this.apiServiceUrl}/kurs/update`,kurs);
  }
  //DELETE
  public izbrisiKurs(kursId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/kurs/delete/${kursId}`);
  }


  ////////////////////////////////////////
  //KORISNIK
  ///////////////////////////////////////

  //READ
  public vratiKorisnike(): Observable<Korisnik[]>{
    return this.http.get<Korisnik[]>(`${this.apiServiceUrl}/korisinik/all`);

  }
  //CREATE
  public dodajKorisnika(korisnik: Korisnik): Observable<Korisnik>{
    return this.http.post<Korisnik>(`${this.apiServiceUrl}/korisnik/add`,korisnik);
  }

  //UPDATE
  public izmeniKorisnika(korisnik:Korisnik): Observable<Korisnik>{
    return this.http.put<Korisnik>(`${this.apiServiceUrl}/korisnik/update`,korisnik);
  }

  //DELETE
  public izbrisiKorisnika(korisnikId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/korisnik/delete/${korisnikId}`);
  }


  /////////////////////////////////////
  //GRUPA
  ///////////////////////////////////

  //READ
  public vratiGrupe(): Observable<Grupa[]>{
    return this.http.get<Grupa[]>(`${this.apiServiceUrl}/grupa/all`);

  }
//CREATE
  public dodajGrupu(grupa: Grupa): Observable<Grupa>{
    return this.http.post<Grupa>(`${this.apiServiceUrl}/grupa/add`,grupa);
  }
  //UPDATE
  public izmeniGrupa(grupa:Grupa): Observable<Grupa>{
    return this.http.put<Grupa>(`${this.apiServiceUrl}/grupa/update`,grupa);
  }

  //DELETE
  public izbrisiGrupa(grupaId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServiceUrl}/grupa/delete/${grupaId}`);
  }


  /////////////////////////////////////////
  //RASPORED KURSA
  /////////////////////////////////////////

  //READ
  public vratiRasporede():Observable<RasporedKursa[]>{
    return this.http.get<RasporedKursa[]>(`${this.apiServiceUrl}/rasporedKursa/all`);

  }
//CREATE
  public dodajRaspored(raspored: RasporedKursa): Observable<RasporedKursa>{
    return this.http.post<RasporedKursa>(`${this.apiServiceUrl}/rasporedKursa/add`,raspored);
  }
  //UPDATE
  public izmeniRaspored(raspored:RasporedKursa): Observable<RasporedKursa>{
    return this.http.put<RasporedKursa>(`${this.apiServiceUrl}/rasporedKursa/update`,raspored);
  }
  // //DELETE
  // public izbrisiRaspored(plesId: number): Observable<void>{
  //   return this.http.delete<void>(`${this.apiServiceUrl}/ples/delete/${plesId}`);
  // }

  //PRIJAVA

  //READ
  public vratiPrijave(): Observable<Prijava[]>{
    return this.http.get<Prijava[]>(`${this.apiServiceUrl}/prijava/all`);

  }

  //CREATE
  public dodajPrijavu(prijava: Prijava): Observable<Prijava>{
    return this.http.post<Prijava>(`${this.apiServiceUrl}/prijava/add`,prijava);
  }


  //UPDATE
  public izmeniPrijavu(prijava:Prijava): Observable<Prijava>{
    return this.http.put<Prijava>(`${this.apiServiceUrl}/prijava/update`,prijava);
  }

  // //DELETE
}
