import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-logovanje-dialog',
  templateUrl: './neuspesno-logovanje-dialog.component.html',
  styleUrls: ['./neuspesno-logovanje-dialog.component.css']
})
export class NeuspesnoLogovanjeDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoLogovanjeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
