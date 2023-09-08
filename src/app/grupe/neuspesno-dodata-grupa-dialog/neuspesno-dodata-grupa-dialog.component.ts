import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-dodata-grupa-dialog',
  templateUrl: './neuspesno-dodata-grupa-dialog.component.html',
  styleUrls: ['./neuspesno-dodata-grupa-dialog.component.css']
})
export class NeuspesnoDodataGrupaDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoDodataGrupaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
