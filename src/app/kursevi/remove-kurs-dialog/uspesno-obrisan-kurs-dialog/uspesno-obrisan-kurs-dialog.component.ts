import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-obrisan-kurs-dialog',
  templateUrl: './uspesno-obrisan-kurs-dialog.component.html',
  styleUrls: ['./uspesno-obrisan-kurs-dialog.component.css']
})
export class UspesnoObrisanKursDialogComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoObrisanKursDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
