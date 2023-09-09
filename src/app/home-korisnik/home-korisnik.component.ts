import {Component, OnInit} from '@angular/core';
import {Kurs} from "../model/kurs-model";

import {AxiosService} from "../axios.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "../auth/auth-service.service";
import {MatDialog} from "@angular/material/dialog";
import {
  UspesnaPrijavaAlertDialogComponent
} from "./uspesna-prijava-alert-dialog/uspesna-prijava-alert-dialog.component";
import {Prijava} from "../model/prijava-model";
import {AddPrijavaDialogComponent} from "./add-prijava-dialog/add-prijava-dialog.component";

@Component({
  selector: 'app-home-korisnik',
  templateUrl: './home-korisnik.component.html',
  styleUrls: ['./home-korisnik.component.css']
})
export class HomeKorisnikComponent implements OnInit{
  kursevi: Kurs[];
prijavaa: Prijava;
  constructor(private service: AxiosService, private authService: AuthServiceService,public dialog:MatDialog) {
  }

  ngOnInit() {
    this.getKursevi();

  }


  public getKursevi():void{
    this.service.request(
      "GET",
      "/kurs/all",
      {}
    ).then(
      (response)=>{
        this.kursevi = response.data;
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.authService.logOut();
        }else{
          this.kursevi = error.response.code;
        }
      }
    );
  }

  searchKurs(key: string) {
    console.log(key);
    const results: Kurs[] = [];
    for(const kurs of this.kursevi){
      if(
        kurs.nazivKursa.toLowerCase().indexOf(key.toLowerCase())!==-1 ||
        kurs.trajanjeUNedeljama.toString().indexOf(key.toLowerCase())!==-1||
        kurs.ples.nazivPlesa.toLowerCase().indexOf(key.toLowerCase()) !==-1
      ){
        results.push(kurs);
      }
    }
    this.kursevi = results;
    if(results.length===0 ||!key){
      this.getKursevi();
    }
  }

 logOut(){
    this.authService.logOut();
 }


 prijava(kurs: Kurs){

    console.log(kurs)


    const dialogAdd = this.dialog.open(AddPrijavaDialogComponent,{
      width: "550px",


      data: kurs});






 }
}
