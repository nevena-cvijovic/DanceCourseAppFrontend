import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Prijava} from "../../model/prijava-model";
import {Grupa} from "../../model/grupa-model";
import {HttpErrorResponse} from "@angular/common/http";
import {AxiosService} from "../../axios.service";

@Component({
  selector: 'app-edit-prijava-dialog',
  templateUrl: './edit-prijava-dialog.component.html',
  styleUrls: ['./edit-prijava-dialog.component.css']
})
export class EditPrijavaDialogComponent implements OnInit{

  prijava: Prijava;
  grupe: Grupa[]=[];
  constructor(public dialogRef: MatDialogRef<EditPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: AxiosService) {

    this.prijava = this.data;
    console.log("prijava pre izmene");
    console.log(this.prijava);

  }

  ngOnInit() {
    this.getGrupe();
  }
  onNoClick() {
    this.dialogRef.close();
  }
  private getGrupe() {

    this.service.request(
      "GET",
      "grupa/all",
      {}
    ).then(
      (response)=>{
        for(const g of response.data){
          if(g.kurs.idKursa===this.prijava.kurs.idKursa){
            this.grupe.push(g);
          }
        }
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }
        console.log(error.message)
      }

    )

  }

  izmeni(p:Prijava) {
    console.log("nakon izmena prijava");
    console.log(p);
    this.prijava.grupa = p.grupa;

    this.service.request(
      "PUT",
      "prijava/update",
      this.prijava
    ).then(
      (response)=>{
        console.log(response.data);
      }
    ).catch(
      (error)=>{
        console.log(error.message);
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }
      }
    )


    this.dialogRef.close();
  }
}
