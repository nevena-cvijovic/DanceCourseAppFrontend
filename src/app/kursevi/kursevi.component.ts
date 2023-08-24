import { Component , OnInit} from '@angular/core';
import {DanceCourseService} from "../dance-course.service";
import {Kurs} from "../model/kurs-model";
import {HttpErrorResponse} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-kursevi',
  templateUrl: './kursevi.component.html',
  styleUrls: ['./kursevi.component.css']
})
export class KurseviComponent implements OnInit{

  kursevi: Kurs[];
  constructor(private service: DanceCourseService) {


  }
ngOnInit() {
    this.getKursevi();
}

  public getKursevi():void{
    this.service.vratiKurseve().subscribe(
      (response: Kurs[])=>{
        this.kursevi = response;
        console.log ( this.kursevi);
      },
    (error: HttpErrorResponse)=>{
        alert(error.message)
    }
    )
  }
  /*public getEmployees(): void {
    //posto vraca observable sto znaci da zahtev putuje preko neta, i morace verovatno malo da se saceka, mora da se subscribe-ujemo
    //kako bi bili obavesteni ako neki podaci dodju od servera
    this.employeeService.getEmployees().subscribe(
      //ako nam se vrati neki odgovor, mora da bude niz zaposlenih
      (response: Employee[]) => {
        //sta zelimo ovde da uradimo - pa da ovaj niz gurnemo u promenljivu employees
        this.employees = response;
      },
      //a ako nam vrati gresku onda radimo sledece
      (error: HttpErrorResponse) => {
        //onda prikazi alert sa  porukom greske koja je dosla od zahteva
        alert(error.message);
      }
    );
  }*/

}
