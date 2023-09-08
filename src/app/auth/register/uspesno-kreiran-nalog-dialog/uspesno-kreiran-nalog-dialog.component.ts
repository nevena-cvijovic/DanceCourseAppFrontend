import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-kreiran-nalog-dialog',
  templateUrl: './uspesno-kreiran-nalog-dialog.component.html',
  styleUrls: ['./uspesno-kreiran-nalog-dialog.component.css']
})
export class UspesnoKreiranNalogDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoKreiranNalogDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
