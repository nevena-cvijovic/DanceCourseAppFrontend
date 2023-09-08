import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-kreiran-nalog-dialog',
  templateUrl: './neuspesno-kreiran-nalog-dialog.component.html',
  styleUrls: ['./neuspesno-kreiran-nalog-dialog.component.css']
})
export class NeuspesnoKreiranNalogDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoKreiranNalogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
