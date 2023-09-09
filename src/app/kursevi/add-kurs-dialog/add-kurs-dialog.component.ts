import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Ples} from "../../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {DanceCourseService} from "../../dance-course.service";
import {NgForm} from "@angular/forms";
import {Kurs} from "../../model/kurs-model";
import {MatTableDataSource} from "@angular/material/table";
import {AxiosService} from "../../axios.service";
import {UspesnoSacuvanKursComponent} from "../uspesno-sacuvan-kurs/uspesno-sacuvan-kurs.component";
import {NeuspesnoSacuvanKursComponent} from "../neuspesno-sacuvan-kurs/neuspesno-sacuvan-kurs.component";
import {AuthServiceService} from "../../auth/auth-service.service";


@Component({
  selector: 'app-add-kurs-dialog',
  templateUrl: './add-kurs-dialog.component.html',
  styleUrls: ['./add-kurs-dialog.component.css']
})
export class AddKursDialogComponent implements OnInit{
    plesovi: Ples[];

    constructor(public dialogRef: MatDialogRef<AddKursDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private axiosService: AxiosService, public dialog: MatDialog, private authService:AuthServiceService) {
    }

    ngOnInit(){
        this.getPlesovi()
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

    dodajKurs(addForm: NgForm) {
     //   document.getElementById('add-kurs-form').click();

      this.axiosService.request(
        "POST",
        "/kurs/add",
        addForm.value
      ).then(
        (response)=>{
          console.log(response);
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
