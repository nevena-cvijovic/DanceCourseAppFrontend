import {Component, Inject, OnInit} from '@angular/core';
import {RasporedKursa} from "../../model/raspored-kursa-model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DanceCourseService} from "../../dance-course.service";
import {Grupa} from "../../model/grupa-model";
import {HttpErrorResponse} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {AxiosService} from "../../axios.service";

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
            @Inject(MAT_DIALOG_DATA) public data: any , private axiosService:AxiosService) {
  this.grupa = this.data;

}


ngOnInit() {
this.getRasporedi();
}

public getRasporedi(){
  this.axiosService.request(
    "GET",
    "rasporedKursa/all",{}
  ).then(
    (response)=>{
      for (const rep of response.data ){
        if(rep.grupa.idGrupe === this.grupa.idGrupe){
          this.rasporedi.push(rep);
        }
      }
      this.dataSource = new MatTableDataSource(this.rasporedi);
    }
  ).catch(
    (error)=>{
      if(error.response.status ===401){
        this.axiosService.setAuthToken(null);
      }else{
        this.rasporedi = error.response.code;
      }
    }
  );


}
}
