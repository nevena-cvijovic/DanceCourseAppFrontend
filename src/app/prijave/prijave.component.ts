import {Component, OnInit} from '@angular/core';
import {Prijava} from "../model/prijava-model";
import {DanceCourseService} from "../dance-course.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-prijave',
  templateUrl: './prijave.component.html',
  styleUrls: ['./prijave.component.css']
})
export class PrijaveComponent implements OnInit{

  prijave: Prijava[];

  constructor(private service: DanceCourseService) {
  }
  ngOnInit() {
    this.getPrijave();
  }

  private getPrijave() {
    this.service.vratiPrijave().subscribe(
      (response: Prijava[])=>{
        this.prijave = response;
        console.log(this.prijave);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }
}
