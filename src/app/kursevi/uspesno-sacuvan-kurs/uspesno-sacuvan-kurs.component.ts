import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-uspesno-sacuvan-kurs',
  templateUrl: './uspesno-sacuvan-kurs.component.html',
  styleUrls: ['./uspesno-sacuvan-kurs.component.css']
})
export class UspesnoSacuvanKursComponent {
  constructor(public dialogRef: MatDialogRef<UspesnoSacuvanKursComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) {

  }
  onOkClick() {
    this.dialogRef.close();
  }
}
