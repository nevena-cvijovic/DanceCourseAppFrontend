import {Component, Inject, OnInit} from '@angular/core';
import {Ples} from "../../model/ples-model";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Kurs} from "../../model/kurs-model";
import {AxiosService} from "../../axios.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UspesnoSacuvanKursComponent} from "../uspesno-sacuvan-kurs/uspesno-sacuvan-kurs.component";
import {NeuspesnoSacuvanKursComponent} from "../neuspesno-sacuvan-kurs/neuspesno-sacuvan-kurs.component";
import {AuthServiceService} from "../../auth/auth-service.service";


@Component({
  selector: 'app-edit-kurs-dialog',
  templateUrl: './edit-kurs-dialog.component.html',
  styleUrls: ['./edit-kurs-dialog.component.css']
})
export class EditKursDialogComponent implements OnInit{
  plesovi: Ples[];
  kurs: Kurs;
  pless: string;

  pl: Ples;


  constructor(public dialogRef: MatDialogRef<EditKursDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private axiosService: AxiosService, public dialog: MatDialog, private authService: AuthServiceService) {
      this.kurs = this.data;
      console.log("kurs pre izmene")
      console.log(this.kurs);
      this.pless = this.kurs.ples.nazivPlesa;
    this.pl = this.kurs.ples;


  }



  ngOnInit(){
    this.getPlesovi()
      console.log("ples u ngOnInitu")

  }
  onNoClick() {
    this.dialogRef.close();
  }
  public getPlesovi():void{
    this.axiosService.request(
      "GET",
      "/ples/all",
      {}
    ).then(
      (response)=>{
        this.plesovi = response.data;

      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.authService.logOut();
        }else{
          this.plesovi = error.response.code;
        }
      }
    );
  }


    izmeni(k: Kurs) {
      console.log("nakon izmena kurs")
      console.log(k)


      this.kurs.trajanjeUNedeljama = k.trajanjeUNedeljama;
      this.kurs.nazivKursa = k.nazivKursa;

      this.axiosService.request(
        "PUT",
        "kurs/update",
        this.kurs
      ).then(
        (response)=>{
          console.log(response.data);
          this.dialog.open(UspesnoSacuvanKursComponent);
        }
      ).catch((error)=>{
        if(error.response.status ===401){
          this.authService.logOut();
        }
        this.dialog.open(NeuspesnoSacuvanKursComponent);
      })



        this.dialogRef.close();
    }
}
