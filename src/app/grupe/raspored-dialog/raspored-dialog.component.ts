import {Component, Inject, OnInit} from '@angular/core';
import {RasporedKursa} from "../../model/raspored-kursa-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Grupa} from "../../model/grupa-model";
import {HttpErrorResponse} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-raspored-dialog',
  templateUrl: './raspored-dialog.component.html',
  styleUrls: ['./raspored-dialog.component.css']
})
export class RasporedDialogComponent implements OnInit{
rasporedi: RasporedKursa[] =[];
grupa: Grupa;
displayedColumns: string[]= ['danUNedelji','brojCasova','brojSale','vreme','opisKursa'];
dataSource:any;
constructor(public dialogRef: MatDialogRef<RasporedDialogComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any, private service: DanceCourseService ) {
  this.grupa = this.data;

}


ngOnInit() {
this.getRasporedi();
}

public getRasporedi(){
  this.service.vratiRasporede().subscribe(
      (response: RasporedKursa[])=>{
        console.log(response);

        for (const rep of response ){
            if(rep.grupa.idGrupe === this.grupa.idGrupe){
                this.rasporedi.push(rep);
            }
        }
        this.dataSource = new MatTableDataSource(this.rasporedi);
  },
      (error: HttpErrorResponse)=>{
          alert(error.message);
      }
  )
}
}
