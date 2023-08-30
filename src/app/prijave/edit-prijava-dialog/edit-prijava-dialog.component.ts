import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Prijava} from "../../model/prijava-model";
import {Grupa} from "../../model/grupa-model";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-edit-prijava-dialog',
  templateUrl: './edit-prijava-dialog.component.html',
  styleUrls: ['./edit-prijava-dialog.component.css']
})
export class EditPrijavaDialogComponent implements OnInit{

  prijava: Prijava;
  grupe: Grupa[]=[];
  constructor(public dialogRef: MatDialogRef<EditPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService) {

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
    this.service.vratiGrupe().subscribe(
      (response: Grupa[])=>{
        for(const g of response){
          if(g.kurs.idKursa===this.prijava.kurs.idKursa){
            this.grupe.push(g);
          }
        }
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  izmeni(p:Prijava) {
    console.log("nakon izmena prijava");
    console.log(p);
    this.prijava.grupa = p.grupa;

    this.service.izmeniPrijavu(this.prijava).subscribe(
      (response: Prijava)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
    this.dialogRef.close();
  }
}
