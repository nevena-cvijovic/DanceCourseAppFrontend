import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Ples} from "../../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {AxiosService} from "../../axios.service";
import {UspesnoDodatPlesDialogComponent} from "../uspesno-dodat-ples-dialog/uspesno-dodat-ples-dialog.component";
import {AuthServiceService} from "../../auth/auth-service.service";
import {NeuspesnoDodatPlesDialogComponent} from "../neuspesno-dodat-ples-dialog/neuspesno-dodat-ples-dialog.component";
@Component({
  selector: 'app-add-ples-dialog',
  templateUrl: './add-ples-dialog.component.html',
  styleUrls: ['./add-ples-dialog.component.css']
})
export class AddPlesDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddPlesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: AxiosService, public dialog: MatDialog, private authService:AuthServiceService) {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  dodajPles(addForm: NgForm) {
    this.service.request(
      "POST",
      "ples/add",
      addForm.value
    ).then(
      (response)=>{
        console.log(response);
        addForm.resetForm();
        const dialogRef = this.dialog.open(UspesnoDodatPlesDialogComponent);
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.authService.logOut();
        }
        this.dialog.open(NeuspesnoDodatPlesDialogComponent);
        addForm.resetForm();
      }
    )

    this.dialogRef.close();
  }
}
