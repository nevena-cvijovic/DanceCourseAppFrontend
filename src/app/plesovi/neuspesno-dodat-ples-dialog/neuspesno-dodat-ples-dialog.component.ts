import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-dodat-ples-dialog',
  templateUrl: './neuspesno-dodat-ples-dialog.component.html',
  styleUrls: ['./neuspesno-dodat-ples-dialog.component.css']
})
export class NeuspesnoDodatPlesDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoDodatPlesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }

  onOkClick() {
    this.dialogRef.close();
  }
}
