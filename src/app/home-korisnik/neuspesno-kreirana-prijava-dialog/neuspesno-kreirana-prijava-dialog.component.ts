import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-kreirana-prijava-dialog',
  templateUrl: './neuspesno-kreirana-prijava-dialog.component.html',
  styleUrls: ['./neuspesno-kreirana-prijava-dialog.component.css']
})
export class NeuspesnoKreiranaPrijavaDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoKreiranaPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
