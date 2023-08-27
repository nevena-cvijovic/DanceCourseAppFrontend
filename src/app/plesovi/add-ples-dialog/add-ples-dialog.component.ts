import {Component, Inject} from '@angular/core';
import {NgForm} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Ples} from "../../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-add-ples-dialog',
  templateUrl: './add-ples-dialog.component.html',
  styleUrls: ['./add-ples-dialog.component.css']
})
export class AddPlesDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddPlesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService) {
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  dodajPles(addForm: NgForm) {
    this.service.dodajPles(addForm.value).subscribe(
        (response: Ples)=>{
          console.log(response);
          addForm.resetForm();
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
          addForm.resetForm();
        }
    );
    this.dialogRef.close();
  }
}
