import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-dodat-ples-dialog',
  templateUrl: './uspesno-dodat-ples-dialog.component.html',
  styleUrls: ['./uspesno-dodat-ples-dialog.component.css']
})
export class UspesnoDodatPlesDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoDodatPlesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }

  onOkClick() {
   this.dialogRef.close();
  }
}
