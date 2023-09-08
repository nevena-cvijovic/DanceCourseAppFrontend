import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-dodata-grupa-dialog',
  templateUrl: './uspesno-dodata-grupa-dialog.component.html',
  styleUrls: ['./uspesno-dodata-grupa-dialog.component.css']
})
export class UspesnoDodataGrupaDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoDodataGrupaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
