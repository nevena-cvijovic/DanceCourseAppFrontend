import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Kurs} from "../../model/kurs-model";

@Component({
  selector: 'app-uspesna-prijava-alert-dialog',
  templateUrl: './uspesna-prijava-alert-dialog.component.html',
  styleUrls: ['./uspesna-prijava-alert-dialog.component.css']
})
export class UspesnaPrijavaAlertDialogComponent {
  kurs: Kurs;
  constructor(public dialogRef: MatDialogRef<UspesnaPrijavaAlertDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {
  this.kurs = this.data;
  }

  onOkClick() {
    this.dialogRef.close();
  }
}
