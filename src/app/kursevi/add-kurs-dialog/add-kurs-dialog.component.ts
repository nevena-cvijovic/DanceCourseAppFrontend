import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Ples} from "../../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {DanceCourseService} from "../../dance-course.service";
import {NgForm} from "@angular/forms";
import {Kurs} from "../../model/kurs-model";


@Component({
  selector: 'app-add-kurs-dialog',
  templateUrl: './add-kurs-dialog.component.html',
  styleUrls: ['./add-kurs-dialog.component.css']
})
export class AddKursDialogComponent implements OnInit{
    plesovi: Ples[];

    constructor(public dialogRef: MatDialogRef<AddKursDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService) {
    }

    ngOnInit(){
        this.getPlesovi()
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

    dodajKurs(addForm: NgForm) {
     //   document.getElementById('add-kurs-form').click();

        this.service.dodajKurs(addForm.value).subscribe(
            (response: Kurs)=>{
                console.log(response);

                addForm.resetForm();
            },
            (error: HttpErrorResponse)=>{
                alert(error.message); // samo da prikaze gresku
                addForm.reset(); //za ciscenje forme kako bi bila cista za novu upotrebu
            }

        )

        this.dialogRef.close();
    }
}
