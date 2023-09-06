import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Ples} from "../../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {AxiosService} from "../../axios.service";
@Component({
  selector: 'app-add-ples-dialog',
  templateUrl: './add-ples-dialog.component.html',
  styleUrls: ['./add-ples-dialog.component.css']
})
export class AddPlesDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddPlesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: AxiosService) {
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
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }
        addForm.resetForm();
      }
    )

    this.dialogRef.close();
  }
}
