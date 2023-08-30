import {Component, OnInit} from '@angular/core';
import {Prijava} from "../model/prijava-model";
import {DanceCourseService} from "../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {EditKursDialogComponent} from "../kursevi/edit-kurs-dialog/edit-kurs-dialog.component";
import {EditPrijavaDialogComponent} from "./edit-prijava-dialog/edit-prijava-dialog.component";

@Component({
  selector: 'app-prijave',
  templateUrl: './prijave.component.html',
  styleUrls: ['./prijave.component.css']
})
export class PrijaveComponent implements OnInit{

  prijave: Prijava[];

  constructor(private service: DanceCourseService,public dialog:MatDialog) {
  }
  ngOnInit() {
    this.getPrijave();
  }

  private getPrijave() {
    this.service.vratiPrijave().subscribe(
      (response: Prijava[])=>{
        this.prijave = response;
        console.log(this.prijave);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }

  openEditDialog(prijava: Prijava) {
    const dialogRef = this.dialog.open(EditPrijavaDialogComponent,{
      data: prijava
    });
    dialogRef.afterClosed().subscribe(result =>{
      console.log(result);
      this.ngOnInit();


    });
  }
}
