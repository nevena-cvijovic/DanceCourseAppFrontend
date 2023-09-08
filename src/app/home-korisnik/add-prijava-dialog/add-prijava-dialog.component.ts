import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AxiosService} from "../../axios.service";
import {Prijava} from "../../model/prijava-model";
import {Kurs} from "../../model/kurs-model";
import {AuthServiceService} from "../../auth/auth-service.service";
import {Korisnik} from "../../model/korisnik-model";
import {Grupa} from "../../model/grupa-model";
import {RasporedKursa} from "../../model/raspored-kursa-model";
import {Ples} from "../../model/ples-model";
import {
  UspesnaPrijavaAlertDialogComponent
} from "../uspesna-prijava-alert-dialog/uspesna-prijava-alert-dialog.component";
import {
  NeuspesnoKreiranaPrijavaDialogComponent
} from "../neuspesno-kreirana-prijava-dialog/neuspesno-kreirana-prijava-dialog.component";

@Component({
  selector: 'app-add-prijava-dialog',
  templateUrl: './add-prijava-dialog.component.html',
  styleUrls: ['./add-prijava-dialog.component.css']
})
export class AddPrijavaDialogComponent implements OnInit{
kurs:Kurs;
korisnik: Korisnik;
date: Date = new Date();
napomena: string;

grupa: Grupa;
  constructor(public dialogRef: MatDialogRef<AddPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: AxiosService, private authService: AuthServiceService, public dialog: MatDialog) {
    this.kurs = this.data;

    console.log(this.kurs)
    this.korisnik = this.authService.getKorisnik()
    console.log(this.korisnik)
  }

  ngOnInit() {
    this.vratiGrupuIzBaze();
  }

  vratiGrupuIzBaze(){
  this.service.request(
    "GET",
    "/grupa/all",
    {}
  ).then(
    (response)=>{
      for(const rep of response.data){
        if(rep.nazivGrupe==="Default grupa"){
          console.log(rep)
          this.grupa = rep;
        }
      }

    }
  ).catch(
    (error)=>{
      if(error.response.status ===401){
        this.service.setAuthToken(null);
      }
    }
  );
}
  dodajPrijavu(){

    this.service.request(
      "POST",
      "prijava/add",
      {
        korisnik: this.korisnik,
        kurs: this.kurs,
        datumPrijave: this.date,
        napomena: this.napomena,
        grupa: this.grupa

      }
    ).then(
      (response)=>{
        console.log(response.data)
        const dialogRef = this.dialog.open(UspesnaPrijavaAlertDialogComponent);
      }
    ).catch((error)=>{
      if(error.response.status ===401){
        this.service.setAuthToken(null);
      }
      this.dialog.open(NeuspesnoKreiranaPrijavaDialogComponent);
      console.log(error.message)
    });


    this.dialogRef.close();
  }


}
