import {Component, OnInit} from '@angular/core';
import {Prijava} from "../model/prijava-model";
import {DanceCourseService} from "../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {EditKursDialogComponent} from "../kursevi/edit-kurs-dialog/edit-kurs-dialog.component";
import {EditPrijavaDialogComponent} from "./edit-prijava-dialog/edit-prijava-dialog.component";
import {AxiosService} from "../axios.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-prijave',
  templateUrl: './prijave.component.html',
  styleUrls: ['./prijave.component.css']
})
export class PrijaveComponent implements OnInit{

  prijave: Prijava[];

  constructor(private service: AxiosService,public dialog:MatDialog) {
  }
  ngOnInit() {
    this.getPrijave();
  }

  private getPrijave() {

    this.service.request(
      "GET",
      "/prijava/all",
      {}
    ).then(
      (response)=>{
        this.prijave = response.data;
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }else{
          this.prijave = error.response.code;
        }
      }
    );

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
