import {Component, Inject, OnInit} from '@angular/core';
import {Ples} from "../../model/ples-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Kurs} from "../../model/kurs-model";


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
              @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService) {
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
    this.service.vratiPlesove().subscribe(
        (response:Ples[])=>{
          this.plesovi = response;
          console.log(this.plesovi);
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
    )
  }


    izmeni(k: Kurs) {
      console.log("nakon izmena kurs")
      console.log(k)


      this.kurs.trajanjeUNedeljama = k.trajanjeUNedeljama;
      this.kurs.nazivKursa = k.nazivKursa;


        this.service.izmeniKurs(this.kurs).subscribe(
            (response: Kurs)=>{
                console.log(response);
            },
            (error: HttpErrorResponse)=>{
                alert(error.message);
            }
        )

        this.dialogRef.close();
    }
}
