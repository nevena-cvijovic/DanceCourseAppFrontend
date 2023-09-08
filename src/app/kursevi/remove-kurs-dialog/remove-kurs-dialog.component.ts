import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {AxiosService} from "../../axios.service";
import {Kurs} from "../../model/kurs-model";

@Component({
  selector: 'app-remove-kurs-dialog',
  templateUrl: './remove-kurs-dialog.component.html',
  styleUrls: ['./remove-kurs-dialog.component.css']
})
export class RemoveKursDialogComponent implements OnInit{

  kurs: Kurs;
  constructor(public dialogRef: MatDialogRef<RemoveKursDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: AxiosService) {
    this.kurs = this.data;
  }

  ngOnInit() {
    console.log(this.data)

  }
  onNoClick() {
    this.dialogRef.close();
  }
  obrisi(){

    this.service.request(
      "DELETE",
      `kurs/delete/${this.kurs.idKursa}`,
      {}

    ).then(
      (response)=>{
        console.log(response)
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }if(error.response.status ===500){
          alert("Postoji grupa koja pohadja ovaj kurs");
        }
      }
    );

    this.dialogRef.close();
  }
}
