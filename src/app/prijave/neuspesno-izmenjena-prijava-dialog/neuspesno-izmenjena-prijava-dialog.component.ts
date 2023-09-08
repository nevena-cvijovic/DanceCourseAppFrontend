import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-izmenjena-prijava-dialog',
  templateUrl: './neuspesno-izmenjena-prijava-dialog.component.html',
  styleUrls: ['./neuspesno-izmenjena-prijava-dialog.component.css']
})
export class NeuspesnoIzmenjenaPrijavaDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoIzmenjenaPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
