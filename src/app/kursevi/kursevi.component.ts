import {Component, OnInit} from '@angular/core';
import {DanceCourseService} from "../dance-course.service";
import {Kurs} from "../model/kurs-model";
import {HttpErrorResponse} from "@angular/common/http";



import{MatDialog} from "@angular/material/dialog";
import{AddKursDialogComponent} from "./add-kurs-dialog/add-kurs-dialog.component";
import {RemoveKursDialogComponent} from "./remove-kurs-dialog/remove-kurs-dialog.component";
import {EditKursDialogComponent} from "./edit-kurs-dialog/edit-kurs-dialog.component";
import {MatFormFieldControl} from "@angular/material/form-field";
import { Router} from "@angular/router";

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})
export class KurseviComponent implements OnInit{

  kursevi: Kurs[];



  constructor(private service: DanceCourseService,public dialog:MatDialog, private router: Router) {



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
      });
dialogRef.afterClosed().subscribe(result => {
    console.log(result);
     // this.ngOnInit();
window.location.reload();

});

}


    openRemoveDialog(kurs:Kurs) {
        const dialogRef = this.dialog.open(RemoveKursDialogComponent,{
            data: kurs
        })
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            this.ngOnInit();

        });
    }

    openEditDialog(kurs: Kurs) {
        const dialogRef = this.dialog.open(EditKursDialogComponent,{
            data: kurs
        });
        dialogRef.afterClosed().subscribe(result =>{
            console.log(result);
            this.ngOnInit();


        });
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
}



