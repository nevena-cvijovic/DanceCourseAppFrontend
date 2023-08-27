import {Component, OnInit} from '@angular/core';
import {Grupa} from "../model/grupa-model";
import {DanceCourseService} from "../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-grupe',
  templateUrl: './grupe.component.html',
  styleUrls: ['./grupe.component.css']
})
export class GrupeComponent implements OnInit{
grupe: Grupa[];

constructor(private service: DanceCourseService) {
}

ngOnInit() {
  this.getGrupe();
}

getGrupe(){
  this.service.vratiGrupe().subscribe(
      (response: Grupa[])=>{
        this.grupe = response;
        console.log(response);
  },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
  )
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
}
