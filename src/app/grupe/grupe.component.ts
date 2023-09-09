import {Component, OnInit} from '@angular/core';
import {Grupa} from "../model/grupa-model";
import {DanceCourseService} from "../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {RasporedDialogComponent} from "./raspored-dialog/raspored-dialog.component";
import {AxiosService} from "../axios.service";
import {AuthServiceService} from "../auth/auth-service.service";

@Component({
  selector: 'app-grupe',
  templateUrl: './grupe.component.html',
  styleUrls: ['./grupe.component.css']
})
export class GrupeComponent implements OnInit{
grupe: Grupa[];
  public opened = false;
constructor(private service: AxiosService, public dialog:MatDialog, private authService: AuthServiceService) {
}

ngOnInit() {
  console.log('ng on init')
  this.getGrupe();
}

getGrupe(){
  this.service.request(
    "GET",
    "/grupa/all",
    {}
  ).then(
    (response)=>{
      this.grupe = response.data;

    }
  ).catch(
    (error)=>{
      if(error.response.status ===401){
        this.authService.logOut();
      }else{
        this.grupe = error.response.code;
      }
    }
  );
}

    searchGrupa(key: string) {
        console.log(key);
        const results: Grupa[]=[];
        for(const grupa of this.grupe){
            if(grupa.nazivGrupe.toLowerCase().indexOf(key.toLowerCase())!==-1 ||
            grupa.kurs.nazivKursa.toLowerCase().indexOf(key.toLowerCase())!==-1){
                results.push(grupa);
            }
        }
        this.grupe = results;
        if(results.length===0 ||!key){
            this.getGrupe();
        }
    }

    openDialog(grupa:Grupa) {

    const dialogRef = this.dialog.open(RasporedDialogComponent,{
        width: '700px',
        data: grupa
    });
        dialogRef.afterClosed().subscribe(result =>{
            console.log(result);
            this.ngOnInit();


        });

    }

  logOut() {
    this.authService.logOut();
  }
}
