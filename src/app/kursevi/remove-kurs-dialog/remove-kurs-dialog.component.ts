import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-remove-kurs-dialog',
  templateUrl: './remove-kurs-dialog.component.html',
  styleUrls: ['./remove-kurs-dialog.component.css']
})
export class RemoveKursDialogComponent implements OnInit{
  constructor(public dialogRef: MatDialogRef<RemoveKursDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService) {
  }

  ngOnInit() {
    console.log(this.data)

  }

  obrisi(){
    this.service.izbrisiKurs(this.data).subscribe(
        (response: void)=>{
          console.log(response);

        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
          if(error.message.includes("500 OK",1)){
            alert("Postoji grupa koja pohadja ovaj kurs");
          }
    }
    )
    this.dialogRef.close();
  }
}
