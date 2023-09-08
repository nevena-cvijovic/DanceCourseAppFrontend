import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-obrisan-kurs-dialog',
  templateUrl: './neuspesno-obrisan-kurs-dialog.component.html',
  styleUrls: ['./neuspesno-obrisan-kurs-dialog.component.css']
})
export class NeuspesnoObrisanKursDialogComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoObrisanKursDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
