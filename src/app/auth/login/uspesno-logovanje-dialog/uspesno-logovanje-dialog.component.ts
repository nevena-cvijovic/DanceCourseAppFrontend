import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-logovanje-dialog',
  templateUrl: './uspesno-logovanje-dialog.component.html',
  styleUrls: ['./uspesno-logovanje-dialog.component.css']
})
export class UspesnoLogovanjeDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoLogovanjeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
