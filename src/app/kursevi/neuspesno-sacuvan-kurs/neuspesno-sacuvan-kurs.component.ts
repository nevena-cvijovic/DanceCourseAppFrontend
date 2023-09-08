import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-neuspesno-sacuvan-kurs',
  templateUrl: './neuspesno-sacuvan-kurs.component.html',
  styleUrls: ['./neuspesno-sacuvan-kurs.component.css']
})
export class NeuspesnoSacuvanKursComponent {
  constructor(public dialogRef: MatDialogRef<NeuspesnoSacuvanKursComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
