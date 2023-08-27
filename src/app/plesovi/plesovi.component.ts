import {Component, OnInit} from '@angular/core';
import {Ples} from "../model/ples-model";
import {HttpErrorResponse} from "@angular/common/http";
import {DanceCourseService} from "../dance-course.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-plesovi',
  templateUrl: './plesovi.component.html',
  styleUrls: ['./plesovi.component.css']
})
export class PlesoviComponent implements OnInit{

  plesovi: Ples[];
  displayedColumns: string[] = [ 'nazivPlesa'];

  dataSource:any;
    color: ' #801ca4';

constructor(private service: DanceCourseService) {
}

ngOnInit() {
  this.getPlesovi();

}

  public getPlesovi():void{
    this.service.vratiPlesove().subscribe(
        (response:Ples[])=>{
          this.plesovi = response;
          console.log(this.plesovi);
          this.dataSource = new MatTableDataSource(this.plesovi);
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
    )
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



}
