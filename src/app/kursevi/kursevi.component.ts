import {Component, OnInit} from '@angular/core';
import {DanceCourseService} from "../dance-course.service";
import {Kurs} from "../model/kurs-model";
import {HttpErrorResponse} from "@angular/common/http";



import{MatDialog} from "@angular/material/dialog";
import{AddKursDialogComponent} from "./add-kurs-dialog/add-kurs-dialog.component";


@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})
export class KurseviComponent implements OnInit{

  kursevi: Kurs[];


  editKurs: Kurs;
  deleteKurs:Kurs;
  constructor(private service: DanceCourseService,public dialog:MatDialog) {


  }
ngOnInit() {
    this.getKursevi();

}


    public getKursevi():void{
    this.service.vratiKurseve().subscribe(
      (response: Kurs[])=>{
        this.kursevi = response;
        console.log ( this.kursevi);
      },
    (error: HttpErrorResponse)=>{
        alert(error.message)
    }
    )
  }


openDialog(){
    const dialogRef =   this.dialog.open(AddKursDialogComponent,{

          width: "550px",

          data:'right click'
      })
dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    this.ngOnInit();

});

}




}



