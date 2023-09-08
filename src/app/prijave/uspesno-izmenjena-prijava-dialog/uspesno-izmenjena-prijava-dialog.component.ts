import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-izmenjena-prijava-dialog',
  templateUrl: './uspesno-izmenjena-prijava-dialog.component.html',
  styleUrls: ['./uspesno-izmenjena-prijava-dialog.component.css']
})
export class UspesnoIzmenjenaPrijavaDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoIzmenjenaPrijavaDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }

  onOkClick() {
    this.dialogRef.close();
  }
}
