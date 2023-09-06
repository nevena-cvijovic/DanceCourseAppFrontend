import {Component, OnInit} from '@angular/core';
import {Ples} from "../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {DanceCourseService} from "../dance-course.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AddPlesDialogComponent} from "./add-ples-dialog/add-ples-dialog.component";
import {SelectionModel} from "@angular/cdk/collections";
import {AxiosService} from "../axios.service";


@Component({
  selector: 'app-plesovi',
  templateUrl: './plesovi.component.html',
  styleUrls: ['./plesovi.component.css']
})
export class PlesoviComponent implements OnInit{

  plesovi: Ples[]=[];
  displayedColumns: string[] = [ 'nazivPlesa'];
    selection = new SelectionModel<Ples>(false, []);
  dataSource:any;

    color: ' #801ca4';

constructor(private service: AxiosService,public dialog:MatDialog) {
}

ngOnInit() {
  this.getPlesovi();

}

  public getPlesovi():void{

    this.service.request(
      "GET",
      "/ples/all",
      {}
    ).then(
      (response)=>{
        this.plesovi = response.data;
        this.dataSource = new MatTableDataSource(this.plesovi);
      }
    ).catch(
      (error)=>{
        if(error.response.status ===401){
          this.service.setAuthToken(null);
        }else{
          this.plesovi = error.response.code;
        }
      }
    );
  }

    searchPles(key: string) {
        console.log(key);
        const results: Ples[] = [];
        for(const ples of this.plesovi){
            if(ples.nazivPlesa.toLowerCase().indexOf(key.toLowerCase())!==-1){
                results.push(ples);
            }
        }
        this.plesovi = results;
        this.dataSource = new MatTableDataSource(this.plesovi);
        if(results.length===0 ||!key){
            this.getPlesovi();
        }
    }


    openDialog() {
        const dialogRef = this.dialog.open(AddPlesDialogComponent,{
            width:"550px",

        });
        dialogRef.afterClosed().subscribe(result=>{
            console.log(result);
            this.getPlesovi();
        })
    }
}
